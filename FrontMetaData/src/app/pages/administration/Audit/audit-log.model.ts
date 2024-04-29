export class AuditLogModule { }

export interface AuditLog {
    actionType: string;
    description: string;
    userIpAddress: string;
    actionDateTime: string;
    idAuditLog : number;
    archived: boolean;

}

export interface UserWithAudits {
    id: number;
    name: string;
    auditLogs: AuditLog[];
}