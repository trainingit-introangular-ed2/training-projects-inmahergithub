import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto2 } from '../../models/project2.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() public buscaId = new EventEmitter<number>();
  @Input() public project: Proyecto2;
  public IdProy: number;

  constructor() {}

  ngOnInit() {}
}
