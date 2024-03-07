import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { LineageComponent } from './lineage/lineage.component';
import { WorkFlowsComponent } from './work-flows/work-flows.component';




const routes: Routes = [
    {
        path: 'catalogs',
        component: CatalogsComponent
    },
    {
        path: 'lineage',
        component: LineageComponent
    },
    {
        path: 'workFlows',
        component: WorkFlowsComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }