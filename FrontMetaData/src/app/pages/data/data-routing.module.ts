import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBasesComponent } from './data-bases/data-bases.component';
import { DataRequestsComponent } from './data-requests/data-requests.component';
import { PlateformConnectionComponent } from './plateform-connection/plateform-connection.component';
<<<<<<< HEAD
import { ColumnMetadataComponent } from '../catalogs/column-metadata/column-metadata.component';
=======
>>>>>>> 87a445450 (integration user cleaned)



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
<<<<<<< HEAD
  

=======
>>>>>>> 87a445450 (integration user cleaned)

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataRoutingModule { }