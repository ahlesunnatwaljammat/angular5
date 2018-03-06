import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {LazyTable1Component} from '../components/lazy-table-1/lazy-table-1.component';
import {LazyTable2Component} from '../components/lazy-table-2/lazy-table-2.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lazy-demo-1', component: LazyTable1Component },
  { path: 'lazy-demo-2', component: LazyTable2Component }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
