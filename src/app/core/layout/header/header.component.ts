import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../project2/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: number;
  //environment.title;
  constructor(private projectService: ProjectService) {
    this.title = projectService.obtenNumProyectos();
  }

  ngOnInit() {}
}
