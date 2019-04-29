import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project2RoutingModule } from './project2-routing.module';
import { DashboardComponent } from './project2/dashboard/dashboard.component';
import { FilterComponent } from './project2/filter/filter.component';
import { ListComponent } from './project2/list/list.component';
import { NewComponent } from './project2/new/new.component';
import { Project2Component } from './project2/project2.component';

@NgModule({
  declarations: [Project2Component, NewComponent, DashboardComponent, ListComponent, FilterComponent],
  imports: [CommonModule, Project2RoutingModule, FormsModule]
})
export class Project2Module {}
