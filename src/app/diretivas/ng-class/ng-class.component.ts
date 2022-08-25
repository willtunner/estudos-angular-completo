import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    //todo: Muda de true para false e vice-versa
    this.meuFavorito = !this.meuFavorito;
  }

}
