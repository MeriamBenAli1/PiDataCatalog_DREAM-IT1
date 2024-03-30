import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { LineageComponent } from './lineage/lineage.component';
import { WorkFlowsComponent } from './work-flows/work-flows.component';
<<<<<<< HEAD
=======
import { UsersComponent } from './users/users.component';
import { DemandedAccessComponent } from './demanded-access/demanded-access.component';
>>>>>>> 87a445450 (integration user cleaned)




const routes: Routes = [
    {
<<<<<<< HEAD
=======
        path: 'users',
        component: UsersComponent
    },
    {
>>>>>>> 87a445450 (integration user cleaned)
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
<<<<<<< HEAD
=======
    }, {
        path: 'access-demand',
        component: DemandedAccessComponent
>>>>>>> 87a445450 (integration user cleaned)
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }