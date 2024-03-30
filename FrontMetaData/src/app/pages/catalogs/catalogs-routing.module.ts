import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCatalogsComponent } from './all-catalogs/all-catalogs.component';
import { InformationAssetsComponent } from './information-assets/information-assets.component';
import { MetadataImportsComponent } from './metadata-imports/metadata-imports.component';



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

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogsRoutingModule { }