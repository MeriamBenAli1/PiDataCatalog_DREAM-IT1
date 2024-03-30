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
///
import { AjouterStatComponent } from './ajouter-stat/ajouter-stat.component';
import { StatInterfaceComponent } from 'src/app/stat-interface/stat-interface.component';
import { StatPolicyComponent } from 'src/app/stat-policy/stat-policy.component';
import { StatMetadataComponent } from 'src/app/stat-metadata/stat-metadata.component';
import { ChartComponent } from './chart/chart.component';
import { ReferencesDataComponent } from './references-data/references-data.component';
import { BusinessTermsComponent } from './business-terms/business-terms.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClassificationComponent } from './classification/classification.component';
import { DataClassesComponent } from './data-classes/data-classes.component';
import { DataDiscoveryComponent } from './data-discovery/data-discovery.component';
import { DataQualityComponent } from './data-quality/data-quality.component';
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
    },
    {
      path: 'StatInterface',
      component: StatInterfaceComponent
  },
 
  {
      path: 'StatMetaData',
      component: StatMetadataComponent
  },
  

  {
      path: 'referencesData',
      component: ReferencesDataComponent        
      
  },
  {
      path: 'rules',
      component: ChartComponent
  },
  {
      path: 'Stat',
      component: AjouterStatComponent
  },
  {
      path: 'charts',
      component: ChartComponent
  },
  {
    path: 'businessTerms',
    component: BusinessTermsComponent
},
{
    path: 'categories',
    component: CategoriesComponent
},
{
    path: 'classification',
    component: ClassificationComponent
},
{
  path: 'dataClasses',
  component: DataClassesComponent
},
{
  path: 'dataDiscovery',
  component: DataDiscoveryComponent
},
{
  path: 'dataQuality',
  component: DataQualityComponent
},
  ];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class GouvernanaceRoutingModule { }

