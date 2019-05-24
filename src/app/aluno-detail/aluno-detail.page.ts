import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';


@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.page.html',
  styleUrls: ['./aluno-detail.page.scss'],
})
export class AlunoDetailPage implements OnInit {
  //Declarando o metodo
  task;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.task = this.route.snapshot.paramMap.get('task');
  }

}
