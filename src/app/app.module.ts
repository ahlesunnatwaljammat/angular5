import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatTableModule, MatMenuModule, MatPaginatorModule, MatSortModule,
  MatProgressSpinnerModule, MatProgressBarModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LazyTable1Component } from './components/lazy-table-1/lazy-table-1.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { LazyTable2Component } from './components/lazy-table-2/lazy-table-2.component';
import {HttpClientModule} from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LazyTable1Component,
    HeaderComponent,
    LazyTable2Component
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatMenuModule, MatCardModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatProgressSpinnerModule, MatProgressBarModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
