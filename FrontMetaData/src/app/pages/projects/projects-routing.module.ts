import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { JobsComponent } from './jobs/jobs.component';




const routes: Routes = [
    {
        path: 'allProjects',
        component: AllProjectsComponent
    },
    {
        path: 'jobs',
        component: JobsComponent
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }