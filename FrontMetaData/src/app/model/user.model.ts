export class Role {
    id: number;
    name: ERole;
    demandedRoles: DemandedRole[];
  }
  
  export enum ERole {
    ROLE_USER = 'SIMPLE_USER',
    ROLE_ADMIN = 'ADMIN',
    ROLE_AN = 'ANYALYSTE',
    ROLE_AFF = 'UTLISATEUR_AFFAIRE',
    ROLE_Donnes = 'RESPONSABLE_DONEES'
  }
  
  export class DemandedRole {
    id: number;
    user: User;
    role: Role;
    accessApproved: boolean;
  }
  
  export class User {
    id: number;
    nom: string;
    prenom: string;
    image: string;
    email: string;
    password: string;
    roles: Role[];
    passwordResetToken: string;
    accessApproved: boolean;
    demandedRoles: DemandedRole[];
  }
  