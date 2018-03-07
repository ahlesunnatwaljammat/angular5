import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WikiHomeComponent} from './wiki-home/wiki-home.component';

const routes: Routes = [
  { path: 'wiki/wiki-home', component: WikiHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
