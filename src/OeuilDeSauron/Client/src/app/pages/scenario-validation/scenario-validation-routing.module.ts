import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenarioValidationComponent } from './scenario-validation.component';

const routes: Routes = [
  {path :'' , component :ScenarioValidationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScenarioValidationRoutingModule { }
