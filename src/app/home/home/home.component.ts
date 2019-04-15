import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public description = 'Gestión de mis proyectos';
  public numProject = 4;

  constructor() {}

  ngOnInit() {}
}
