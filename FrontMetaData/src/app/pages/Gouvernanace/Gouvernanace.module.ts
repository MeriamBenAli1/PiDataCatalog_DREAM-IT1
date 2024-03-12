import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgForm, ReactiveFormsModule } from '@angular/forms';

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
import { HttpClient } from '@angular/common/http';
import { AjouterPolicyComponent } from 'src/app/ajouter-policy/ajouter-policy.component';
import { ModifierPolicyComponent } from 'src/app/modifier-policy/modifier-policy.component';
import { RouterModule } from '@angular/router';
import { AjouterDocumentationComponent } from 'src/app/ajouter-documentation/ajouter-documentation.component';
import { ListDocumentationComponent } from 'src/app/list-documentation/list-documentation.component';
import { ModifierDocumentationComponent } from 'src/app/modifier-documentation/modifier-documentation.component';
import { EmailSenderComponent } from 'src/app/email-sender/email-sender.component';
import { ExportPDFPolicyComponent } from 'src/app/export-pdfpolicy/export-pdfpolicy.component';
@NgModule({
  // tslint:disable-next-line: max-line-length
    declarations: [],
  
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
   KeyValuePipe
    
    //hmddd
    
  ],
  exports: [ListPolicyComponent,ModifierPolicyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GouvernanaceModule { }

