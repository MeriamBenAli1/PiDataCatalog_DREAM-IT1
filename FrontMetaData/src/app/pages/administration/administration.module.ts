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
import { CatalogsComponent } from './catalogs/catalogs.component';
import { LineageComponent } from './lineage/lineage.component';
<<<<<<< HEAD
import { WorkFlowsComponent } from './work-flows/work-flows.component';
=======
import { UsersComponent } from './users/users.component';
import { WorkFlowsComponent } from './work-flows/work-flows.component';
import { DemandedAccessComponent } from './demanded-access/demanded-access.component';

>>>>>>> 87a445450 (integration user cleaned)
import { AdministrationRoutingModule } from './administration-routing.module';


@NgModule({
  // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
  declarations: [CatalogsComponent, 
    LineageComponent, 
    WorkFlowsComponent, 
=======
  declarations: [UsersComponent,
    CatalogsComponent, 
    LineageComponent, 
    WorkFlowsComponent, 
    DemandedAccessComponent,
>>>>>>> 87a445450 (integration user cleaned)
],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule,
    AdministrationRoutingModule,
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
export class AdministrationModule { }
