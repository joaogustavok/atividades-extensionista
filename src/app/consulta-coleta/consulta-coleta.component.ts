import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface PontoColeta {
  nome: string;
  cep: string;
  endereco: string;
  horarioFuncionamento: string;
}

@Component({
  selector: 'app-consulta-coleta',
  templateUrl: './consulta-coleta.component.html',
  styleUrls: ['./consulta-coleta.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ConsultaColetaComponent {
  cepInput: string = '';
  resultados: PontoColeta[] = [];

  pontosColeta: PontoColeta[] = [
    {
      nome: 'Ponto de Coleta Centro',
      cep: '83840000',
      endereco: 'Avenida Fernandes de Andrade, 1870',
      horarioFuncionamento: 'Seg-Sab: 8h às 17h',
    },
    {
      nome: 'Ponto de Coleta Centro 2',
      cep: '83840000',
      endereco: 'Avenida Fernandes de Andrade, 410',
      horarioFuncionamento: 'Seg-Sab: 8h às 17h',
    },
    {
      nome: 'Ponto de Coleta Norte',
      cep: '83841000',
      endereco: 'Avenida Norte, 200)',
      horarioFuncionamento: 'Seg-Sáb: 9h às 18h',
    },
    // Adicione mais pontos conforme necessário
  ];

  buscarPontos() {
    this.resultados = this.pontosColeta.filter(
      (ponto) => ponto.cep === this.cepInput
    );
  }
}
