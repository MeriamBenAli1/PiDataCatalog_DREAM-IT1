import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbAccordionModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule, NgbCollapseModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//Wizard
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';

import { NgxSliderModule } from 'ngx-slider-v2';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { UiModule } from '../../shared/ui/ui.module';
import { DataBasesComponent } from './data-bases/data-bases.component';
import { DataRequestsComponent } from './data-requests/data-requests.component';
import { PlateformConnectionComponent } from './plateform-connection/plateform-connection.component';
import { DataRoutingModule } from './data-routing.module';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [DataBasesComponent, 
    DataRequestsComponent, 
    PlateformConnectionComponent, 
],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule,
    DataRoutingModule,
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
    NgbModalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataModule { }
