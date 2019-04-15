import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  public proyecto: Project;

  constructor() {
    this.proyecto = { id: 0, name: '' };
  }

  ngOnInit() {}
  public saveProject() {
    this.proyecto.id = environment.projects.length;
    environment.projects.push({ ...this.proyecto });
  }
}
