export interface Column {
    idColumn: number;
    name: string;
    type: string;
    description: string;
    tags?: string[];
    isDynamicallyAdded : boolean; 
  }