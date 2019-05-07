import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Proyecto2 } from './models/project2.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private ProyectsApiUrl = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpCliente: HttpClient) {}

  public obtenNumProyectos(): number {
    return environment.projects.length;
  }

  public obtenlistaProyectos(): Proyecto2[] {
    return environment.projects;
  }

  public getListInAPI(): Observable<Proyecto2[]> {
    const observableP$ = this.httpCliente.get(this.ProyectsApiUrl).pipe(share());
    const observableP2$ = observableP$.pipe(map(this.transformaDatos));
    return observableP2$;
  }

  private transformaDatos(datosproyecto: any): Proyecto2[] {
    if (datosproyecto != null) {
      return Object.keys(datosproyecto).map(key => ({
        id: datosproyecto[key].id,
        name: datosproyecto[key].name
      }));
    } else {
      return [];
    }
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
  public saveNewProyInApi(ProyName: string): void {
    let newProyect: Proyecto2;
    //necesito obtener el número de proyectos d la API
    //me subscribo y caundo lleguen los datos obtengo el ID y guardo en la API
    this.getListInAPI().subscribe(x => {
      newProyect = { id: x.length, name: ProyName };
      this.httpCliente.post(this.ProyectsApiUrl, newProyect).subscribe();
    });
  }
}
