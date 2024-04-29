import { Component, OnInit } from '@angular/core';
import { AuditLogService } from './audit-log.service';
import { AuditLog, UserWithAudits } from './audit-log.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {
  usersWithAudits: UserWithAudits[] = [];
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  constructor(private auditLogService: AuditLogService,private snackBar: MatSnackBar , private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    // Récupérer le paramètre de requête 'archived'
    this.route.queryParams.subscribe(params => {
      const isArchived = params['archived'];
      if (isArchived) {
        this.getArchivedAuditLogs();
      } else {
        this.getUsersWithAudits();
      }
    });
  }
  archiveAudit(auditId: number): void {
    this.auditLogService.archiveAudit(auditId).subscribe(() => {
      this.openSnackBar('Audit Archived');
      this.getUsersWithAudits();

    }, error => {
      console.error('Error archiving audit:', error);

    });
  }
  deleteAudit(auditId: number): void {
    this.auditLogService.deleteAudit(auditId).subscribe(() => {
      this.openSnackBar('Audit Deleted');
      this.getUsersWithAudits();

    }, error => {
      console.error('Error archiving audit:', error);
    });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['custom-snackbar'] // Classe CSS personnalisée

    });
  }
  getUsersWithAudits(): void {
    this.auditLogService.getUsersWithAudits()
      .subscribe(users => this.usersWithAudits = users);
      console.log(this.usersWithAudits);
  }
  getArchivedAuditLogs(): void {
    this.auditLogService.getArchivedAudits()
      .subscribe(users => this.usersWithAudits = users);
  }
}

