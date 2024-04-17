import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { NgbAccordionModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule, NgbCollapseModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { NgxSliderModule } from 'ngx-slider-v2';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { UiModule } from '../../shared/ui/ui.module';
import { BusinessTermsComponent } from './business-terms/business-terms.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClassificationComponent } from './classification/classification.component';
import { DataClassesComponent } from './data-classes/data-classes.component';
import { DataDiscoveryComponent } from './data-discovery/data-discovery.component';
import { DataQualityComponent } from './data-quality/data-quality.component';
import { PoliciesComponent } from './policies/policies.component';
import { ReferencesDataComponent } from './references-data/references-data.component';
import { ChartComponent } from './rules/rules.component';
import { GouvernanceRoutingModule } from './gouvernance-routing.module';
import { AjouterStatComponent } from './ajouter-stat/ajouter-stat.component';
import { StatPolicyComponent } from 'src/app/stat-policy/stat-policy.component';
@NgModule({
  declarations: [
    BusinessTermsComponent, 
    StatPolicyComponent,
    CategoriesComponent, 
    ClassificationComponent, 
    DataClassesComponent, 
    DataDiscoveryComponent, 
    DataQualityComponent, 
    PoliciesComponent, 
    ReferencesDataComponent, 
    ChartComponent,
    ChartComponent,
    AjouterStatComponent
    //AjouterStatComponent // Make sure to include AjouterStatComponent here
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GouvernanceRoutingModule,
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
    ChartModule,
    DropzoneModule // Ensure DropzoneModule is imported correctly
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GouvernanceModule { }
