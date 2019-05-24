import { Component, OnInit } from '@angular/core';

// Importando o metodo Toast
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.page.html',
  styleUrls: ['./lista-alunos.page.scss'],
})
export class ListaAlunosPage {

  title : "Lista | Alunos";
  alunos = [];

  ALUNOS_KEY = 'alunos'

  // Declarando
  constructor() { }

  // Adicionando
  async add() {
    
  }

  // Excluir
  async remove() {

  }

  // Edição
  edit() {
    
  }

}
