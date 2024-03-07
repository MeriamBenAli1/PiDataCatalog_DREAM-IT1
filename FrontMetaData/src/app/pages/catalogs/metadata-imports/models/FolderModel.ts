// src/app/models/folder.model.ts
export interface Folder {
    idFolder: number; // Assurez-vous que le nom de la propriété correspond à celui dans Spring Boot
    name: string;
    description: string;
    creationDate?: Date; // Optionnel, car peut ne pas être nécessaire pour certaines opérations
    creator?: string; // Optionnel
  }