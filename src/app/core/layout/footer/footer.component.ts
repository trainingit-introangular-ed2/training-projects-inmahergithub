import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreMsgService } from '../../../project2/project2/store-msg.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public mensajes$: Observable<any>;

  constructor(private storeMensaje: StoreMsgService) {}

  ngOnInit() {
    this.mensajes$ = this.storeMensaje.select$();
  }
}
