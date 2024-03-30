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
import { RulesComponent } from './rules/rules.component';

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
        path: 'policies',
        component: PoliciesComponent
    },
    {
        path: 'referencesData',
        component: ReferencesDataComponent        
        
    },
    {
        path: 'rules',
        component: RulesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GouvernanceRoutingModule { }