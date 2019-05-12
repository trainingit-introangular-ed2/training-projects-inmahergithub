import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { StoreMsgService } from './store-msg.service';

@Injectable()
export class InterceptorLlamadasService implements HttpInterceptor {
  private mensaje = '';
  private contadorllamadas = 0;

  constructor(private storemensaje: StoreMsgService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    // operador filter: filtra, en este caso, los eventso de tipo httpresponse les aplicas el operador tap
    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => this.auditEvent(resp, started))
    );
  }
  private auditEvent(resp: HttpResponse<any>, started: number) {
    // Pintar en el log cuando se realizó la llamda, la respuesta y cuanto tiempo duró
    const elapsedMs = Date.now() - started;
    const eventMessage = resp.statusText + ' on ' + resp.url;
    const message = eventMessage + ' in ' + elapsedMs + ' ms';
    console.log(message);
    this.contadorllamadas = this.contadorllamadas + 1;
    //const msg = Date.now() + ' Llamada HTTP a: ' + resp.url + ' Result:' + resp.statusText;
    const msg = ' Llamada nº:' + this.contadorllamadas + ' URL: ' + resp.url + ' .Resultado:' + resp.statusText;
    this.storemensaje.dispatch(msg);
  }
}
