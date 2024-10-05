import { Component } from '@angular/core';
import { ConsultaColetaComponent } from './consulta-coleta/consulta-coleta.component';

@Component({
  selector: 'app-root',
  template: `<app-consulta-coleta></app-consulta-coleta>`,
  standalone: true,
  imports: [ConsultaColetaComponent],
})
export class AppComponent {
  title = 'coleta-lixo-app';
}
