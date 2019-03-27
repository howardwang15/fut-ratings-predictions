import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
