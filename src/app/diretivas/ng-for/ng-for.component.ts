import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  cursos: string[] = ['Angular', 'React', 'Vue'];

  constructor() { }

  ngOnInit(): void {
  }

}
