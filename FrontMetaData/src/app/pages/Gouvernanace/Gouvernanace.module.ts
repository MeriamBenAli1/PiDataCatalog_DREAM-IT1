import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbAccordionModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule, NgbCollapseModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//Wizard
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { UiModule } from '../../shared/ui/ui.module';
import { KeyValuePipe } from '@angular/common';
import { GouvernanaceRoutingModule } from './Gouvernanace-routing.module';

import { ListPolicyComponent } from 'src/app/list-policy/list-policy.component';
import { AjouterPolicyComponent } from 'src/app/ajouter-policy/ajouter-policy.component';
import { ModifierPolicyComponent } from 'src/app/modifier-policy/modifier-policy.component';
import { RouterModule } from '@angular/router';
import { AjouterDocumentationComponent } from 'src/app/ajouter-documentation/ajouter-documentation.component';
import { ListDocumentationComponent } from 'src/app/list-documentation/list-documentation.component';
import { ModifierDocumentationComponent } from 'src/app/modifier-documentation/modifier-documentation.component';
import { EmailSenderComponent } from 'src/app/email-sender/email-sender.component';
import { ExportPDFPolicyComponent } from 'src/app/export-pdfpolicy/export-pdfpolicy.component';








import { ChartModule } from 'angular-highcharts';

import { BusinessTermsComponent } from './business-terms/business-terms.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClassificationComponent } from './classification/classification.component';
import { DataClassesComponent } from './data-classes/data-classes.component';
import { DataDiscoveryComponent } from './data-discovery/data-discovery.component';
import { DataQualityComponent } from './data-quality/data-quality.component';
import { PoliciesComponent } from './policies/policies.component';
import { ReferencesDataComponent } from './references-data/references-data.component';
import { ChartComponent } from './rules/rules.component';
import { AjouterStatComponent } from './ajouter-stat/ajouter-stat.component';
import { StatPolicyComponent } from 'src/app/stat-policy/stat-policy.component';
@NgModule({
  // tslint:disable-next-line: max-line-length
    declarations: [
      AjouterStatComponent,
   StatPolicyComponent,
   BusinessTermsComponent,
   CategoriesComponent,
   ClassificationComponent,
   DataClassesComponent,
   DataDiscoveryComponent,
   DataQualityComponent,
   PoliciesComponent,
   ReferencesDataComponent,
   ChartComponent
    ],
  
  imports: [
    GouvernanaceRoutingModule,
    CommonModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule,
   AjouterPolicyComponent,
    UiModule,
    CdkStepperModule,
    NgStepperModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgSelectModule,
    NgxSliderModule,
    NgbModalModule,
  
   ListPolicyComponent,
   ModifierPolicyComponent,
   RouterModule,
   AjouterDocumentationComponent,
   ListDocumentationComponent,
   ModifierDocumentationComponent,
   ExportPDFPolicyComponent,
   KeyValuePipe,
   
   EmailSenderComponent,
 
   ChartModule,
  
 

    
    //hmddd
    
  ],
  exports: [ListPolicyComponent,ModifierPolicyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GouvernanaceModule { }

