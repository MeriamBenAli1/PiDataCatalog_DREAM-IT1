import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCatalogsComponent } from './all-catalogs/all-catalogs.component';
import { InformationAssetsComponent } from './information-assets/information-assets.component';
import { MetadataImportsComponent } from './metadata-imports/metadata-imports.component';
import { AddFolderDialogComponent } from './add-folder-dialog/add-folder-dialog.component';
import { ColumnMetadataComponent } from './column-metadata/column-metadata.component';
import { TableInterfaceComponent } from './table-interface/table-interface.component';
import { AddMetadataDialogComponent } from './add-metadata-dialog/add-metadata-dialog.component';
import { EditColumnDialogComponent } from './edit-column-dialog/edit-column-dialog.component';



const routes: Routes = [
    {
        path: 'allCatalogs',
        component: AllCatalogsComponent
    },
    {
        path: 'informationAssets',
        component: InformationAssetsComponent
    },
    {
        path: 'metadataImports',
        component: MetadataImportsComponent
    },
  
    {
        path: 'AddFolder',
        component: AddFolderDialogComponent
    },
    { path: 'Metadata/:id', component: ColumnMetadataComponent },
    { path: 'tables',component: TableInterfaceComponent },
    { path: 'addMetaData',component: AddMetadataDialogComponent },
    
    { path: 'editColumn',component: EditColumnDialogComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogsRoutingModule { }