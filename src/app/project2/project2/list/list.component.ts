import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto2 } from '../../models/project2.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public listadoProyectos: object[];
  //@Input() public lstProyects: object[];
  @Input() public lstProyects: Observable<Proyecto2[]>;

  constructor() {}

  ngOnInit() {}
}
