import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StatInterfaceComponent } from '../stat-interface/stat-interface.component';
import { PoliciesComponent } from './gouvernance/policies/policies.component'
import { StatPolicyComponent } from '../stat-policy/stat-policy.component';
import { ReferencesDataComponent } from './gouvernance/references-data/references-data.component';
import { StatMetadataComponent } from '../stat-metadata/stat-metadata.component';
const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'StatInterface', component: StatInterfaceComponent },
    { path: 'policies', component: PoliciesComponent },
    { path: 'referencesData', component: ReferencesDataComponent },
    { path: 'Statpolicies', component: StatPolicyComponent },
    { path: 'StatMetaData', component: StatMetadataComponent },
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
