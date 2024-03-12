package tn.esprit.datacatalog.Service;

import tn.esprit.datacatalog.Entities.Policy;

import java.io.ByteArrayInputStream;
import java.util.List;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import tn.esprit.datacatalog.Entities.Policy;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.stream.Stream;
@Service
public class ExportPDFService {
    public static ByteArrayInputStream policiesPDFReport(List<Policy> policies) {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();

            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, BaseColor.BLACK);
            Paragraph titlePara = new Paragraph("Policy List", titleFont);
            titlePara.setAlignment(Element.ALIGN_CENTER);
            document.add(titlePara);
            document.add(Chunk.NEWLINE);

            PdfPTable table = new PdfPTable(3); // Le nombre de colonnes doit correspondre aux champs que vous souhaitez inclure
            Stream.of("ID", "Name", "Rules").forEach(columnTitle -> {
                PdfPCell header = new PdfPCell();
                header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                header.setHorizontalAlignment(Element.ALIGN_CENTER);
                header.setBorderWidth(2);
                header.setPhrase(new Phrase(columnTitle, FontFactory.getFont(FontFactory.HELVETICA_BOLD)));
                table.addCell(header);
            });

            for (Policy policy : policies) {
                table.addCell(policy.getIdPolicy().toString());
                table.addCell(policy.getNom());
                table.addCell(policy.getRules());
            }

            document.add(table);
            document.close();
        } catch (DocumentException e) {
            e.printStackTrace();
        }

        return new ByteArrayInputStream(out.toByteArray());
    }
}
