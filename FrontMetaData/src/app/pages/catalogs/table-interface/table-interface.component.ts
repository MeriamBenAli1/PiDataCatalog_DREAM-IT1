import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../metadata-imports/service/data-table.service';
import { DataTable } from '../metadata-imports/models/DataTable';
import { Router } from '@angular/router';
import { Column } from '../metadata-imports/models/metadata';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // Add your data here
];

@Component({
  selector: 'app-table-interface',
  templateUrl: './table-interface.component.html',
  styleUrls: ['./table-interface.component.scss']
})
export class TableInterfaceComponent implements OnInit {
  // Update with appropriate initializations
  tableData: DataTable[] = []; // Assuming DataTable is your interface
  selectedDataTable: DataTable | null = null; 
 
  selectedColymn: Column[] = []; 
  displayedColumns: string[] = ['idTable', 'name', 'source', 'description', 'creationDate', 'size', 'creator', 'title', 'location', 'type'];
  dataSource = ELEMENT_DATA;
  constructor(private dataTableService: DataTableService, private router: Router) {}

  ngOnInit() {
    this.fetchTableData();
  }

  fetchTableData() {
    this.dataTableService.getAllDataTables().subscribe(data => {
      this.tableData = data;
    });
  }
  fetchColumns(tableId: number): void {
    this.dataTableService.getMetaDataForTable(tableId).subscribe(schemas => {
      this.selectedColymn = schemas; 
    });
  }
  openSchemas(dataTable: DataTable): void {
    this.router.navigate(['/Metadata', dataTable.idTable]);
  }
  
  
}

