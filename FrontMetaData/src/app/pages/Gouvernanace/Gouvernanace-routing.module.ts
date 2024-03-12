import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterDocumentationComponent } from 'src/app/ajouter-documentation/ajouter-documentation.component';


import { AjouterPolicyComponent } from 'src/app/ajouter-policy/ajouter-policy.component';
import { ChaatBootComponent } from 'src/app/chaat-boot/chaat-boot.component';
import { EmailSenderComponent } from 'src/app/email-sender/email-sender.component';
import { ExportPDFPolicyComponent } from 'src/app/export-pdfpolicy/export-pdfpolicy.component';
import { ExtractionPDFComponent } from 'src/app/extraction-pdf/extraction-pdf.component';
import { ListDocumentationComponent } from 'src/app/list-documentation/list-documentation.component';
import { ListPolicyUserComponent } from 'src/app/list-policy-user/list-policy-user.component';
import { ListPolicyComponent } from 'src/app/list-policy/list-policy.component';
import { ModifierDocumentationComponent } from 'src/app/modifier-documentation/modifier-documentation.component';
import { ModifierPolicyComponent } from 'src/app/modifier-policy/modifier-policy.component';
import { StatPolicyComponent } from 'src/app/stat-policy/stat-policy.component';

const routes: Routes = [
   
    {
      //hmdlll
      path: 'Ajouter-policy',
      component: AjouterPolicyComponent
    },
    
    {
      //hmdlll
      path: 'Ajouter-Documentation',
      component: AjouterDocumentationComponent
    },
    {
      //hmdlll
      path: 'List-Documentation',
      component: ListDocumentationComponent
    },
    {
      //hmdlll
      path: 'List-policy',
      component: ListPolicyComponent
    },
    {
      //hmdlll
      path: 'modifier-Documentation/:id',
      component: ModifierDocumentationComponent
    },
    {
      //hmdlll
      path: 'mail',
      component: EmailSenderComponent
    },
    {
      //hmdlll
      path: 'List-policyUser',
      component: ListPolicyUserComponent
    },
    {
      //hmdlll
      path: 'Extraction',
      component: ExtractionPDFComponent
    },
    {
      //hmdlll
      path: 'modifier-policy/:id',
      component: ModifierPolicyComponent
    },
    {
      //hmdlll
      path: 'chatboot',
      component: ChaatBootComponent
    },
    {
      //hmdlll
      path: 'Statpolicies',
      component: StatPolicyComponent
    }
  ];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class GouvernanaceRoutingModule { }

