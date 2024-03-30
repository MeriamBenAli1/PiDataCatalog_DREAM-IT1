import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'admin', component: DashboardComponent },

    { path:'users',loadChildren:()=>import('./administration/administration.module').then(m=>m.AdministrationModule)}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
