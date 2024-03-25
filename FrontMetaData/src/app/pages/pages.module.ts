import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ListPolicyComponent } from '../list-policy/list-policy.component';
import { AjouterPolicyComponent } from '../ajouter-policy/ajouter-policy.component';
import { ModifierPolicyComponent } from '../modifier-policy/modifier-policy.component';
import { AjouterDocumentationComponent } from '../ajouter-documentation/ajouter-documentation.component';
import { ListDocumentationComponent } from '../list-documentation/list-documentation.component';
import { ModifierDocumentationComponent } from '../modifier-documentation/modifier-documentation.component';
import { ExportPDFPolicyComponent } from '../export-pdfpolicy/export-pdfpolicy.component';
import { KeyValuePipe } from '@angular/common';


import { UiModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgPipesModule } from 'ngx-pipes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GouvernanaceModule } from './Gouvernanace/Gouvernanace.module';
import { DataModule } from './data/data.module';
import { ProjectsModule } from './projects/projects.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { AdministrationModule } from './administration/administration.module';





@NgModule({
  declarations: [ DashboardComponent],
  imports: [
    CommonModule,
    AjouterPolicyComponent,
    AdministrationModule,
    CatalogsModule,
    ProjectsModule,
    DataModule,
    GouvernanaceModule,
    ExportPDFPolicyComponent,
    RouterModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    NgPipesModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    NgFor,
    KeyValuePipe,
    ListPolicyComponent,
    ModifierPolicyComponent,
    AjouterDocumentationComponent,
    ListDocumentationComponent,
    ModifierDocumentationComponent,
    FormsModule,

    

    
    //ExportPDFPolicyComponent
   
    
  ],
  providers: [
  ]
})
export class PagesModule { }