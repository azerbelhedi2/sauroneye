import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('../demo/components/pages/crud/crud.module').then(m => m.CrudModule) },
        { path: 'project-details/:id', loadChildren: () => import('../pages/project-details/project-details.module').then(m => m.ProjectDetailsModule) },
        { path: 'list-projects', loadChildren: () => import('../pages/list-projects/list-projects.module').then(m => m.ListProjectsModule) },
        { path: 'ssl-validation', loadChildren: () => import('../pages/ssl-validation/ssl-validation.module').then(m => m.SslValidationModule) },
        { path: 'scenario-validation', loadChildren: () => import('../pages/scenario-validation/scenario-validation.module').then(m => m.ScenarioValidationModule) },
        { path: 'domain-validation', loadChildren: () => import('../pages/domain-validation/domain-validation.module').then(m => m.DomainValidationModule) },
        { path: '**', redirectTo: '/' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
