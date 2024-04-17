import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessTermsComponent } from './business-terms/business-terms.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClassificationComponent } from './classification/classification.component';

import { DataClassesComponent } from './data-classes/data-classes.component';
import { DataDiscoveryComponent } from './data-discovery/data-discovery.component';
import { DataQualityComponent } from './data-quality/data-quality.component';
import { PoliciesComponent } from './policies/policies.component';
import { ReferencesDataComponent } from './references-data/references-data.component';
import { ChartComponent } from './rules/rules.component';
import { AjouterStatComponent } from './ajouter-stat/ajouter-stat.component';
import { StatInterfaceComponent } from 'src/app/stat-interface/stat-interface.component';
import { StatPolicyComponent } from 'src/app/stat-policy/stat-policy.component';
import { StatMetadataComponent } from 'src/app/stat-metadata/stat-metadata.component';

const routes: Routes = [
    {
        path: 'businessTerms',
        component: BusinessTermsComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'classification',
        component: ClassificationComponent
    },
    {
        path: 'dataClasses',
        component: DataClassesComponent
    },
    {
        path: 'dataDiscovery',
        component: DataDiscoveryComponent
    },
    {
        path: 'dataQuality',
        component: DataQualityComponent
    },
    {
        path: 'StatInterface',
        component: StatInterfaceComponent
    },
    {
        path: 'Statpolicies',
        component: StatPolicyComponent
    },
    {
        path: 'StatMetaData',
        component: StatMetadataComponent
    },
    {
        path: 'policies',
        component: PoliciesComponent
    },

    {
        path: 'referencesData',
        component: ReferencesDataComponent        
        
    },
    {
        path: 'rules',
        component: ChartComponent
    },
    {
        path: 'Stat',
        component: AjouterStatComponent
    },
    {
        path: 'charts',
        component: ChartComponent
    }
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GouvernanceRoutingModule { }