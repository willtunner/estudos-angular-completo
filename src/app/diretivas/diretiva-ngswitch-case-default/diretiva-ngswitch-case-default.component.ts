import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch-case-default',
  templateUrl: './diretiva-ngswitch-case-default.component.html',
  styleUrls: ['./diretiva-ngswitch-case-default.component.scss']
})
export class DiretivaNgswitchCaseDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aba:string = 'home';
}
