import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

import { DashboardComponent } from './dashboard/dashboard.component';

=======
import { ProfileComponent } from './profile/profile.component';

import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> 87a445450 (integration user cleaned)
import { AjouterPolicyComponent } from '../ajouter-policy/ajouter-policy.component';
import { ListPolicyComponent } from '../list-policy/list-policy.component';
import { ModifierPolicyComponent } from '../modifier-policy/modifier-policy.component';
import { AjouterDocumentationComponent } from '../ajouter-documentation/ajouter-documentation.component';
import { ListDocumentationComponent } from '../list-documentation/list-documentation.component';
import { ModifierDocumentationComponent } from '../modifier-documentation/modifier-documentation.component';
import { EmailSenderComponent } from '../email-sender/email-sender.component';
import { ExportPDFPolicyComponent } from '../export-pdfpolicy/export-pdfpolicy.component';
import { ExtractionPDFComponent } from '../extraction-pdf/extraction-pdf.component';
import { StatPolicyComponent } from '../stat-policy/stat-policy.component';
import { ListPolicyUserComponent } from '../list-policy-user/list-policy-user.component';
import { ChaatBootComponent } from '../chaat-boot/chaat-boot.component';
import { StatInterfaceComponent } from '../stat-interface/stat-interface.component';
import { StatMetadataComponent } from '../stat-metadata/stat-metadata.component';


<<<<<<< HEAD

const routes: Routes = [
    { path: '', component: DashboardComponent },
    //hmdll ya rabiii
    
=======
const routes: Routes = [
    { path: '', component: DashboardComponent },
>>>>>>> 87a445450 (integration user cleaned)
    { path: 'Ajouter-policy', component: AjouterPolicyComponent },
    { path: 'List-policy', component: ListPolicyComponent },
    { path: 'List-policyUser', component: ListPolicyUserComponent },
    { path: 'Ajouter-Documentation', component: AjouterDocumentationComponent },
    { path: 'List-Documentation', component: ListDocumentationComponent },
    { path: 'modifier-Documentation/:id', component: ModifierDocumentationComponent },
    { path: 'modifier-policy/:id', component: ModifierPolicyComponent },
    { path: 'Pdf', component: ExportPDFPolicyComponent },
    { path: 'Statpolicies', component: StatPolicyComponent },
    { path: 'mail', component: EmailSenderComponent },
    { path: 'chatboot', component: ChaatBootComponent },
    { path: 'Extraction', component: ExtractionPDFComponent },
    
    { path: 'StatInterface', component: StatInterfaceComponent },
  
    { path: 'Statpolicies', component: StatPolicyComponent },
    { path: 'StatMetaData', component: StatMetadataComponent },

<<<<<<< HEAD

  
    
    { path:'data',loadChildren:()=>import('./data/data.module').then(m=>m.DataModule)},
    { path:'projects',loadChildren:()=>import('./projects/projects.module').then(m=>m.ProjectsModule)},
    { path:'catalogs',loadChildren:()=>import('./catalogs/catalogs.module').then(m=>m.CatalogsModule)},
    { path:'administration',loadChildren:()=>import('./administration/administration.module').then(m=>m.AdministrationModule)},
    { path: 'Gouvernanace', loadChildren: () => import('./Gouvernanace/Gouvernanace.module').then(m => m.GouvernanaceModule) },
   
=======
    { path: 'profile', component: ProfileComponent },
    { path: 'Gouvernanace', loadChildren: () => import('./Gouvernanace/Gouvernanace.module').then(m => m.GouvernanaceModule) },
    { path:'data',loadChildren:()=>import('./data/data.module').then(m=>m.DataModule)},
    { path:'projects',loadChildren:()=>import('./projects/projects.module').then(m=>m.ProjectsModule)},
    { path:'catalogs',loadChildren:()=>import('./catalogs/catalogs.module').then(m=>m.CatalogsModule)},
    { path:'administration',loadChildren:()=>import('./administration/administration.module').then(m=>m.AdministrationModule)}

>>>>>>> 87a445450 (integration user cleaned)
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
