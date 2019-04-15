import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public description = 'Gestión de mis proyectos';
  public numProject: number;

  constructor() {
    this.numProject = 0;
  }

  ngOnInit() {
    this.numProject = environment.projects.length;
  }
}
