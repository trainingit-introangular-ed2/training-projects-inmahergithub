import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public ProyName: string;
  constructor(public location: Location, public project2Service: ProjectService) {}

  ngOnInit() {}

  public guardaProyecto() {
    this.project2Service.saveNewProject(this.ProyName);
  }
}
