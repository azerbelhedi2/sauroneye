import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainValidationComponent } from './domain-validation.component';

const routes: Routes = [
  {path :'' , component :DomainValidationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainValidationRoutingModule { }
