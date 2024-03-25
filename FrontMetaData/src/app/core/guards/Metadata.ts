export class MetaData {
    idTable: number;
    name: string;
    source: string;
    description: string;
    creationDate: Date;
    size: number;
    creator: string;
    location: Location;
  }
  
  export enum Location {
    FRANCE = 'FRANCE',
    CANADA = 'CANADA'
  }
  