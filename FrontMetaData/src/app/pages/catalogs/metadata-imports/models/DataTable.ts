export interface DataTable {
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
  
  export enum Location {
    // Ajoutez les valeurs possibles pour l'emplacement ici
  }
  
  export enum TypeFile {
    // Ajoutez les valeurs possibles pour le type de fichier ici
  }
  
  export interface ColumnMetaData {
    // Définissez les propriétés de la colonne ici
  }