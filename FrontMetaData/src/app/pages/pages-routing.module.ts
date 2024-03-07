import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path:'gouvernance',loadChildren:()=>import('./gouvernance/gouvernance.module').then(m=>m.GouvernanceModule)},
    { path:'data',loadChildren:()=>import('./data/data.module').then(m=>m.DataModule)},
    { path:'projects',loadChildren:()=>import('./projects/projects.module').then(m=>m.ProjectsModule)},
    { path:'catalogs',loadChildren:()=>import('./catalogs/catalogs.module').then(m=>m.CatalogsModule)},
    { path:'administration',loadChildren:()=>import('./administration/administration.module').then(m=>m.AdministrationModule)}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
