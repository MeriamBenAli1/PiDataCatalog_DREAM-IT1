import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { LineageComponent } from './lineage/lineage.component';
import { WorkFlowsComponent } from './work-flows/work-flows.component';
import { UsersComponent } from './users/users.component';
import { DemandedAccessComponent } from './demanded-access/demanded-access.component';




const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
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
    }, {
        path: 'access-demand',
        component: DemandedAccessComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }