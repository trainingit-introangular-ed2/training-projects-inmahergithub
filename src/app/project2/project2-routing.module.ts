import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './project2/new/new.component';
import { Project2Component } from './project2/project2.component';

const routes: Routes = [
  {
    path: '',
    component: Project2Component
  },
  {
    path: 'nuevo',
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Project2RoutingModule {}
