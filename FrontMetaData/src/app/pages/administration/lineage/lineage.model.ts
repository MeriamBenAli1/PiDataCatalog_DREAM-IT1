import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LineageComponent } from './lineage.component';


export class LineageModule { }

export interface Metadata {
  nom: string;
  type: string;
  idMetaData: number;
}

export interface Table {
    idTable: number;
    name: string;
    source: string;
    description: string;
    creationDate: string; // Ou vous pouvez utiliser le type Date si vous préférez
    size: number;
    creator: string;
    title: string;
    location: Location;
    type: TypeFile;
    schemas: ColumnMetaData[];
}
export interface ColumnMatch {
  columnName: string;
  tables: string[];
}

export enum Location {
    // Ajoutez les valeurs possibles pour l'emplacement ici
  }
  
  export enum TypeFile {
    // Ajoutez les valeurs possibles pour le type de fichier ici
  }
  
  export interface ColumnMetaData {
    name: string;
    type: TypeFile;

  }