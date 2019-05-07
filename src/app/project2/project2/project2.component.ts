import { HttpClient } from '@angular/common/http';
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
  public totalProyectosAPI: number;
  public lstproyectos: Proyecto2[];
  public proyecto: Proyecto2;
  public proyApi: Proyecto2;
  public pApi: Proyecto2;
  public proyectosA: Proyecto2[];
  public obsvProyectos: Observable<Proyecto2[]>;

  constructor(private httpclient: HttpClient, private project2Service: ProjectService) {
    //this.totalProyectos = this.project2Service.obtenNumProyectos();
    this.lstproyectos = this.project2Service.obtenlistaProyectos();
    this.obsvProyectos = this.project2Service.getListInAPI();
    this.cuentaPApi();
  }

  ngOnInit() {
    this.proyecto = { id: 0, name: '' };
    this.pApi = { id: 0, name: '' };
  }
  public cuentaPApi(): void {
    this.obsvProyectos.subscribe(x => (this.totalProyectosAPI = x.length));
    //
  }

  public getProyectAPI(idP: number): void {
    this.obsvProyectos.subscribe(x => {
      this.proyectosA = x;
      this.pApi = this.proyectosA.find(item => item.id === idP);
      console.log('buscando proyecto ' + this.pApi.name + ' id enviado =' + idP);
    });
  }
}
