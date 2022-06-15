import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { NgClassComponent } from './components/directives/ng-class/ng-class.component';
import { NgStyleComponent } from './components/directives/ng-style/ng-style.component';
import { ChildComponent } from './components/interpolation/child/child.component';
import { ParentComponent } from './components/interpolation/parent/parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    MainComponent,
    NgClassComponent,
    NgStyleComponent,
    ChildComponent,
    ParentComponent
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
