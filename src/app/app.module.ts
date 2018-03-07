import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatTableModule, MatMenuModule, MatPaginatorModule, MatSortModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatDividerModule, MatFormFieldModule, MatInputModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LazyTable1Component } from './components/lazy-table-1/lazy-table-1.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { LazyTable2Component } from './components/lazy-table-2/lazy-table-2.component';
import {HttpClientModule} from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import {WikiModule} from './components/wiki/wiki.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LazyTable1Component,
    HeaderComponent,
    LazyTable2Component,
    EditTableComponent
  ],
  imports: [
    AppRoutingModule,
    WikiModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatMenuModule, MatCardModule, MatToolbarModule, MatDividerModule, MatFormFieldModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatProgressSpinnerModule, MatProgressBarModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
