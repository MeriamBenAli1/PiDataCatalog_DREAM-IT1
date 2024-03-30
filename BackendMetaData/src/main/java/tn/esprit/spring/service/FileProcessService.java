package tn.esprit.spring.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.spring.enities.ColumnMetaData;
import tn.esprit.spring.enities.Location;
import tn.esprit.spring.enities.MetaData;
import tn.esprit.spring.enities.TypeFile;
import tn.esprit.spring.repositories.ColumnRepository;
import tn.esprit.spring.repositories.MetaDataRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Optional;

@Service
public class FileProcessService {
    @Autowired
    private MetaDataRepository tableRepository;

    @Autowired
    private ColumnRepository schemaRepository;
    @Transactional
    public String processFile(MultipartFile file, String description, Location location, String title, TypeFile typeF) throws Exception {
        String fileName = file.getOriginalFilename();
        Optional<MetaData> existingFile = tableRepository.findByName(file.getOriginalFilename());
        existingFile.ifPresent(fileInfo -> {
            schemaRepository.deleteByParentDataTable(fileInfo);
            tableRepository.delete(fileInfo);
        });
        if (fileName.endsWith(".csv")) {
            return processCSV(file, description, location, title, typeF); // Pass description to processing methods
        } else if (fileName.endsWith(".xlsx")) {
            return processExcel(file, description, location, title, typeF); // Pass description to processing methods
        } else {
            throw new IllegalArgumentException("File format not supported. Please upload a .csv or .xlsx file.");
        }
    }

    private String processCSV(MultipartFile file, String description, Location location, String title, TypeFile typeF) throws IOException, CsvValidationException {
        try (InputStream inputStream = file.getInputStream();
             BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
             CSVReader csvReader = new CSVReader(bufferedReader)) {
            String[] headers = csvReader.readNext();
            if (headers == null) {
                throw new IllegalArgumentException("The CSV file is empty or improperly formatted.");
            }

            Map<String, String> columnTypes = new HashMap<>();
            String[] nextLine = csvReader.readNext(); // Take the first data line to determine types
            if (nextLine != null) {
                for (int i = 0; i < headers.length; i++) {
                    if (nextLine.length > i) {
                        String value = nextLine[i];
                        String type = determineDataType(value);
                        columnTypes.put(headers[i], type);
                    }
                }
            }

            saveFileMetadata(file.getOriginalFilename(), columnTypes, description, file.getSize(), location, title, typeF);
            return "CSV file processed successfully";
        }
    }



    private String processExcel(MultipartFile file, String description, Location location , String title, TypeFile typeF) throws IOException {
        try (InputStream inputStream = file.getInputStream();
             Workbook workbook = new XSSFWorkbook(inputStream)) {
            Sheet sheet = workbook.getSheetAt(0); // the first sheet of the file
            Iterator<Row> rowIterator = sheet.iterator();

            Row headerRow = rowIterator.hasNext() ? rowIterator.next() : null;
            if (headerRow == null) {
                throw new IllegalArgumentException("The Excel file is empty or improperly formatted.");
            }

            Map<String, String> columnTypes = new HashMap<>();
            if (rowIterator.hasNext()) {
                Row dataRow = rowIterator.next(); // Take the first data line to determine types
                for (Cell cell : dataRow) {
                    int columnIndex = cell.getColumnIndex();
                    String header = headerRow.getCell(columnIndex).getStringCellValue();
                    String type = determineDataTypeForCell(cell);
                    columnTypes.put(header, type);
                }
            }

            saveFileMetadata(file.getOriginalFilename(), columnTypes, description, file.getSize(), location, title, typeF);
            return "Excel file processed successfully";
        }
    }


    private void saveFileMetadata(String fileName, Map<String, String> columnTypes, String description, long fileSize, Location location, String title, TypeFile typeF) {
        MetaData fileInfo = new MetaData();
        String nameWithoutExtension = fileName.contains(".") ? fileName.substring(0, fileName.lastIndexOf('.')) : fileName;
        fileInfo.setName(nameWithoutExtension); // Set name without extension
        fileInfo.setSource(fileName); // Set source to original file name
        fileInfo.setCreationDate(LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES)); // Truncate seconds
        fileInfo.setSize((double) fileSize / 1024); // Set size in KB
        fileInfo.setDescription(description);
        fileInfo.setCreator("System");
        fileInfo.setLocation(location);
        fileInfo.setTitle(title);
        fileInfo.setType(typeF);

        fileInfo = tableRepository.save(fileInfo);

        for (Map.Entry<String, String> entry : columnTypes.entrySet()) {
            ColumnMetaData columnInfo = new ColumnMetaData();
            columnInfo.setName(entry.getKey());
            columnInfo.setType(entry.getValue());
            columnInfo.setDescription("Column of " + entry.getKey());
            columnInfo.setParentDataTable(fileInfo);
            schemaRepository.save(columnInfo);
        }
    }




    // type do donnee dans excel
    private String determineDataTypeForCell(Cell cell) {
        switch (cell.getCellType()) {
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    return "Date";
                } else {
                    return Double.class.getSimpleName();
                }
            case BOOLEAN:
                return Boolean.class.getSimpleName();
            case STRING:
                return String.class.getSimpleName();
            default:
                return "Unknown";
        }
    }
    // type de donnee dans csv
    private String determineDataType(String value) {
        try {
            Integer.parseInt(value);
            return "Integer";
        } catch (NumberFormatException e1) {
            try {
                Double.parseDouble(value);
                return "Double";
            } catch (NumberFormatException e2) {
                return "String";
            }
        }
    }
}