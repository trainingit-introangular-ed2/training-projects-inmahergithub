import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Project2RoutingModule } from './project2-routing.module';
import { DashboardComponent } from './project2/dashboard/dashboard.component';
import { FilterComponent } from './project2/filter/filter.component';
import { FiltroComponent } from './project2/filtro/filtro.component';
import { ListComponent } from './project2/list/list.component';
import { NewComponent } from './project2/new/new.component';
import { Project2Component } from './project2/project2.component';

@NgModule({
  declarations: [Project2Component, NewComponent, DashboardComponent, ListComponent, FilterComponent, FiltroComponent],
  imports: [CommonModule, Project2RoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class Project2Module {}
