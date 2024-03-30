import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';
import { KeyValuePipe } from '@angular/common';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgPipesModule } from 'ngx-pipes';
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 87a445450 (integration user cleaned)
import { ListPolicyComponent } from '../list-policy/list-policy.component';
import { AjouterPolicyComponent } from '../ajouter-policy/ajouter-policy.component';
import { ModifierPolicyComponent } from '../modifier-policy/modifier-policy.component';
import { AjouterDocumentationComponent } from '../ajouter-documentation/ajouter-documentation.component';
import { ListDocumentationComponent } from '../list-documentation/list-documentation.component';
import { ModifierDocumentationComponent } from '../modifier-documentation/modifier-documentation.component';
import { ExportPDFPolicyComponent } from '../export-pdfpolicy/export-pdfpolicy.component';
<<<<<<< HEAD
import { KeyValuePipe } from '@angular/common';


import { UiModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgPipesModule } from 'ngx-pipes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GouvernanaceModule } from './Gouvernanace/Gouvernanace.module';
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { GouvernanceModule } from './gouvernance/gouvernance.module';
>>>>>>> 87a445450 (integration user cleaned)
import { DataModule } from './data/data.module';
import { ProjectsModule } from './projects/projects.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { AdministrationModule } from './administration/administration.module';
<<<<<<< HEAD


=======
import { ChartModule } from './chart/chart.module';
import { StatComponent } from '../AdminCharts/widget/stat/stat.component';
>>>>>>> 87a445450 (integration user cleaned)



@NgModule({
<<<<<<< HEAD
  declarations: [ DashboardComponent],
  imports: [
=======
  declarations: [DashboardComponent,StatComponent],
  imports: [
    ExportPDFPolicyComponent,
    NgFor,
>>>>>>> 87a445450 (integration user cleaned)
    CommonModule,
    AjouterPolicyComponent,
    AdministrationModule,
    CatalogsModule,
    ProjectsModule,
    DataModule,
<<<<<<< HEAD
    GouvernanaceModule,
    ExportPDFPolicyComponent,
    RouterModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
=======
    GouvernanceModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    ChartModule,
>>>>>>> 87a445450 (integration user cleaned)
    NgPipesModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
<<<<<<< HEAD
    NgApexchartsModule,
    SimplebarAngularModule,
    NgFor,
    KeyValuePipe,
=======
    NgApexchartsModule, 
     KeyValuePipe,
>>>>>>> 87a445450 (integration user cleaned)
    ListPolicyComponent,
    ModifierPolicyComponent,
    AjouterDocumentationComponent,
    ListDocumentationComponent,
    ModifierDocumentationComponent,
<<<<<<< HEAD
    FormsModule,
    

    

    
    //ExportPDFPolicyComponent
   
    
=======
    SimplebarAngularModule
>>>>>>> 87a445450 (integration user cleaned)
  ],
  providers: [
  ]
})
<<<<<<< HEAD
export class PagesModule { }
=======
export class PagesModule { }
>>>>>>> 87a445450 (integration user cleaned)
