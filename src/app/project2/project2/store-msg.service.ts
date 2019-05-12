import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mensajes } from '../models/mensajes.model';

@Injectable({
  providedIn: 'root'
})
export class StoreMsgService {
  private mensajes = [];
  private mensajes$ = new BehaviorSubject<any[]>([]);
  //private mensajes2 = <Mensajes[]>;
  private mensajes2: Mensajes[];

  private mensajes2$ = new BehaviorSubject<Mensajes[]>([]);
  constructor() {}
  public select$ = () => this.mensajes$.asObservable();

  public dispatch(msg) {
    this.mensajes.push(msg);
    this.mensajes$.next([...this.mensajes]);
  }
}
