import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fichaproyecto',
  templateUrl: './fichaproyecto.component.html',
  styleUrls: ['./fichaproyecto.component.css']
})
export class FichaproyectoComponent implements OnInit {
  public projectId: number;

  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {}
}
