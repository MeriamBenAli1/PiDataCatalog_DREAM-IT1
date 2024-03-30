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
import { AllCatalogsComponent } from './all-catalogs/all-catalogs.component';
import { InformationAssetsComponent } from './information-assets/information-assets.component';
import { MetadataImportsComponent } from './metadata-imports/metadata-imports.component';
import { CatalogsRoutingModule } from './catalogs-routing.module';
<<<<<<< HEAD
import { AddFolderDialogComponent } from './add-folder-dialog/add-folder-dialog.component';

// eya mat
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { ColumnMetadataComponent } from './column-metadata/column-metadata.component';
import { TableInterfaceComponent } from './table-interface/table-interface.component';

import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { AddMetadataDialogComponent } from './add-metadata-dialog/add-metadata-dialog.component';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    AllCatalogsComponent, 
    InformationAssetsComponent, 
    MetadataImportsComponent, 
    AddFolderDialogComponent, 
    ColumnMetadataComponent, 
    TableInterfaceComponent, 
    AddMetadataDialogComponent
=======


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AllCatalogsComponent, 
    InformationAssetsComponent, 
    MetadataImportsComponent, 
>>>>>>> 87a445450 (integration user cleaned)
],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule,
    CatalogsRoutingModule,
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
<<<<<<< HEAD
    NgbModalModule,
    
    

    
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    RouterModule

    

    

=======
    NgbModalModule
>>>>>>> 87a445450 (integration user cleaned)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogsModule { }
