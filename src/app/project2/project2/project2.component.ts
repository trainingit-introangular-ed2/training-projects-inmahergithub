import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto2 } from '../models/project2.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {
  public totalProyectos: number;
  public lstproyectos: Proyecto2[];
  public proyecto: Proyecto2;
  private ProyectsApi = 'https://api-base.herokuapp.com/api/pub/projects';
  public obsvProyectos$: Observable<any> = null;

  constructor(private project2Service: ProjectService) {
    this.totalProyectos = this.project2Service.obtenNumProyectos();
    this.lstproyectos = this.project2Service.obtenlistaProyectos();
  }

  ngOnInit() {
    this.proyecto = { id: 0, name: '' };
  }
  public getProyect(idP: number) {
    let proyectAux: Proyecto2;
    proyectAux = this.project2Service.BuscaProyectoPorId(idP);
    if (proyectAux !== null && proyectAux !== undefined) this.proyecto = proyectAux;
    else this.proyecto = { id: -1, name: '' };
  }
}
