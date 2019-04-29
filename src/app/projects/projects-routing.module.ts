import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjectsComponent } from './projects/projects.component';
import { FichaproyectoComponent } from './viewer-project/fichaproyecto/fichaproyecto.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'viewerProject',
        component: ViewerProjectComponent
      },
      {
        path: 'viewerProject/:id',
        component: FichaproyectoComponent
      },
      {
        path: 'NewProject',
        component: NewprojectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
