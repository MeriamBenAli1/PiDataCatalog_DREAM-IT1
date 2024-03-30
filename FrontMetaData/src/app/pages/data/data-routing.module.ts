import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBasesComponent } from './data-bases/data-bases.component';
import { DataRequestsComponent } from './data-requests/data-requests.component';
import { PlateformConnectionComponent } from './plateform-connection/plateform-connection.component';



const routes: Routes = [
    {
        path: 'dataBase',
        component: DataBasesComponent
    },
    {
        path: 'dataRequest',
        component: DataRequestsComponent
    },
    {
        path: 'platformConnection',
        component: PlateformConnectionComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataRoutingModule { }