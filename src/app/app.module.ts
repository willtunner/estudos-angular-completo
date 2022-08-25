import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretivas/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchCaseDefaultComponent } from './diretivas/diretiva-ngswitch-case-default/diretiva-ngswitch-case-default.component';
import { NgForComponent } from './diretivas/ng-for/ng-for.component';
import { NgClassComponent } from './diretivas/ng-class/ng-class.component';
import { NgStyleComponent } from './diretivas/ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { OperadorElvisComponent } from './diretivas/operador-elvis/operador-elvis.component';
import { NgContentComponent } from './diretivas/ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchCaseDefaultComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
