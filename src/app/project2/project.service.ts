import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Proyecto2 } from './models/project2.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(httpCliente: HttpClient) {}

  public obtenNumProyectos(): number {
    return environment.projects.length;
  }

  public obtenlistaProyectos(): Proyecto2[] {
    return environment.projects;
  }
  public BuscaProyectoPorId(idProy: number): Proyecto2 {
    let proyecto: Proyecto2;
    proyecto = { id: 0, name: '' };
    proyecto = environment.projects.find(item => item.id === idProy);
    return proyecto;
  }

  public saveNewProject(nameP: string): void {
    let nuevoProyecto: Proyecto2;

    nuevoProyecto = { id: environment.projects.length, name: nameP };
    //inicializar
    //nuevoProyecto = { id: 0, name: '' };
    //nuevoProyecto.id =  environment.projects.length;
    //nuevoProyecto.name = nameP;
    environment.projects.push({ ...nuevoProyecto });
  }
}
