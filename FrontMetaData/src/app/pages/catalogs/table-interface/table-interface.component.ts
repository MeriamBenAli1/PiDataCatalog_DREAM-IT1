import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../metadata-imports/service/data-table.service';
import { DataTable } from '../metadata-imports/models/DataTable';
import { Router } from '@angular/router';
import { Column } from '../metadata-imports/models/metadata';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table-interface',
  templateUrl: './table-interface.component.html',
  styleUrls: ['./table-interface.component.scss']
})
export class TableInterfaceComponent implements OnInit {
  tableData: DataTable[] = [];
  selectedDataTable: DataTable | null = null;
  searchControl = new FormControl();
  filterTypeControl = new FormControl('name'); // Ajout pour le choix de type de filtre
  filterTypeControl1= new FormControl('creator');
  
  filterTypeControl2= new FormControl('location');
  
  filteredData: BehaviorSubject<DataTable[]> = new BehaviorSubject<DataTable[]>([]);
  displayedColumns: string[] = ['idTable', 'name', 'source', 'description', 'creationDate', 'size', 'creator', 'title', 'location', 'type'];

  constructor(private dataTableService: DataTableService, private router: Router) {}

  ngOnInit() {
    this.fetchTableData();
    this.setupFilter();
  }

  fetchTableData() {
    this.dataTableService.getAllDataTables().subscribe(data => {
      this.tableData = data;
      this.applyFilter();
    });
  }

  openSchemas(dataTable: DataTable): void {
    this.router.navigate(['/Metadata', dataTable.idTable]);
  }
  
  setupFilter(): void {
    this.searchControl.valueChanges.subscribe(() => {
      this.applyFilter();
    });

    // Utilisez filterTypeControl au lieu de selectedFilter
    this.filterTypeControl.valueChanges.subscribe(() => {
      this.applyFilter();
    });
  }

  applyFilter(): void {
    const text = this.searchControl.value.trim().toLowerCase();
    const filterType = this.filterTypeControl.value;

    let filteredData = this.tableData.filter(dataTable => {
      switch (filterType) {
        case 'name':
          return dataTable.title.toLowerCase().includes(text);
        case 'creator':
          return dataTable.creator.toLowerCase().includes(text);

          case 'location': 
          return dataTable.title.toLowerCase().includes(text); // Par défaut, filtrer par nom
      }
    });

    this.filteredData.next(filteredData);
  }
}