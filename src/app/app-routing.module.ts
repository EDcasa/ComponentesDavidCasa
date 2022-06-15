import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgStyleComponent } from './components/directives/ng-style/ng-style.component';

const routes: Routes = [
  { path: 'ng-style', component: NgStyleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
