import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { FichaproyectoComponent } from './viewer-project/fichaproyecto/fichaproyecto.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewprojectComponent, FichaproyectoComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
