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
  //private urlApi = 'https://api-base.herokuapp.com/api/pub/projects';
  // @Output() public guardaEnApi = new EventEmitter<string>();

  constructor(public location: Location, public project2Service: ProjectService) {}

  ngOnInit() {}

  public guardaProyEnApi() {
    // this.guardaEnApi.emit( this.ProyName )
    this.project2Service.saveNewProyInApi(this.ProyName);
  }
}
