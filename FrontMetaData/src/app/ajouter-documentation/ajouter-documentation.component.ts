import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous d'importer ReactiveFormsModule ici
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { DocumentationService } from '../core/services/documentation.service';
@Component({
  selector: 'app-ajouter-documentation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ajouter-documentation.component.html',
  styleUrl: './ajouter-documentation.component.scss'
})
export class AjouterDocumentationComponent  implements OnInit{

  documentationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private documentationService: DocumentationService // Inject your Documentation service here
  ) {
    this.documentationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.documentationForm.valid) {
      // Call the service to add documentation, passing the form value
      this.documentationService.postDoc(this.documentationForm.value).subscribe(result => {
        console.log(result);
        // Handle post-submission logic, like navigating to another page or showing a success message
      });
    }
  }
}
