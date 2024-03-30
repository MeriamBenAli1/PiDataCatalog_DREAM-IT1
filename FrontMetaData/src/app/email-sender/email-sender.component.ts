import { Component } from '@angular/core';
import { EmailService } from '../core/services/email.service';
import { FormsModule, NgForm } from '@angular/forms'; // Importez FormsModule ici

@Component({
  selector: 'app-email-sender',
  standalone: true,
  imports: [FormsModule], // Utilisez FormsModule ici
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.scss'] // Corrigez en styleUrls et mettez en tableau
})
export class EmailSenderComponent {
  constructor(private emailService: EmailService) { } // Assurez-vous que le nom correspond

  sendEmail(form: NgForm) {
    if (form.valid) {
      this.emailService.sendEmail(form.value).subscribe(
        response => console.log('Email envoyé avec succès !', response),
        error => console.error('Erreur lors de l\'envoi de l\'email', error)
      );
    }
  }
}
