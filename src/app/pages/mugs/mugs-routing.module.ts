import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MugsComponent } from './mugs.component';

const routes: Routes = [{
  path: '',
  component: MugsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MugsRoutingModule { }
