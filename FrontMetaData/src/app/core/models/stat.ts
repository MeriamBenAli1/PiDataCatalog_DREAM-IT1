import { Choix } from "./choix.enum";

export class Stat {
    idStat?: number;
    nomStat: string; // Correspond à nomStat côté backend
    description: string; // Correspond à Description côté backend
    choix: Choix;
}
