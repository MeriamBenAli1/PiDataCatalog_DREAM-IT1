import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';
import { KeyValuePipe } from '@angular/common';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgPipesModule } from 'ngx-pipes';
import { ProfileComponent } from './profile/profile.component';
import { ListPolicyComponent } from '../list-policy/list-policy.component';
import { AjouterPolicyComponent } from '../ajouter-policy/ajouter-policy.component';
import { ModifierPolicyComponent } from '../modifier-policy/modifier-policy.component';
import { AjouterDocumentationComponent } from '../ajouter-documentation/ajouter-documentation.component';
import { ListDocumentationComponent } from '../list-documentation/list-documentation.component';
import { ModifierDocumentationComponent } from '../modifier-documentation/modifier-documentation.component';
import { ExportPDFPolicyComponent } from '../export-pdfpolicy/export-pdfpolicy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GouvernanceModule } from './gouvernance/gouvernance.module';
import { DataModule } from './data/data.module';
import { ProjectsModule } from './projects/projects.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { AdministrationModule } from './administration/administration.module';
import { ChartModule } from './chart/chart.module';
import { StatComponent } from '../AdminCharts/widget/stat/stat.component';
import { StatMetadataComponent } from '../stat-metadata/stat-metadata.component';



@NgModule({
  declarations: [DashboardComponent,StatComponent],
  imports: [
    ExportPDFPolicyComponent,
    NgFor,
    CommonModule,
    AjouterPolicyComponent,
    AdministrationModule,
    CatalogsModule,
    ProjectsModule,
    DataModule,
    GouvernanceModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    ChartModule,
    NgPipesModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule, 
     KeyValuePipe,
    ListPolicyComponent,
    ModifierPolicyComponent,
    AjouterDocumentationComponent,
    ListDocumentationComponent,
    ModifierDocumentationComponent,
    SimplebarAngularModule,
    StatMetadataComponent
  ],
  providers: [
  ]
})
export class PagesModule { }
