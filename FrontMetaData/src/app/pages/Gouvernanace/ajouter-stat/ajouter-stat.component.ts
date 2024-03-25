import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stat } from '../../../core/models/stat';
import { StatService } from '../../../core/services/stat.service';
import { PolicyService } from 'src/app/core/services/policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-stat',
  templateUrl: './ajouter-stat.component.html',

  styleUrls: ['./ajouter-stat.component.scss']
})

export class AjouterStatComponent implements OnInit {
  statForm: FormGroup;
  choixOptions = ['Policy', 'Rules', 'MetaData']; // Exemple d'options

  constructor(private fb: FormBuilder, private statService: PolicyService , private router: Router) { }

  ngOnInit() {
    this.statForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      choix: [null, Validators.required] // Assurez-vous que l'utilisateur sélectionne une option valide
    });
  }

  onSubmit() {
    if (this.statForm.valid) {
      const stat: Stat = {
        nomStat: this.statForm.value.nom || null,
        description: this.statForm.value.description || null,
        choix: this.statForm.value.choix
      };

      this.statService.ajoutStat(stat).subscribe(
        (stat: Stat) => {
          console.log('Stat ajoutée avec succès :', stat);
          this.statForm.reset();

          // Redirection en fonction de la valeur de choix
          if (stat.choix === 'Policy') {
            this.router.navigate(['/Statpolicies']); // Redirection vers la route Statpolicies
          } else if (stat.choix === 'MetaData') {
            this.router.navigate(['/StatMetaData']); // Redirection vers la route StatMetaData
          }
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la stat :', error);
        }
      );
    }
  }
}
