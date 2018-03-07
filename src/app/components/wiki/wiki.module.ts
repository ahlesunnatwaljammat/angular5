import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiListComponent } from './wiki-list/wiki-list.component';

@NgModule({
  imports: [
    CommonModule,
    WikiRoutingModule
  ],
  declarations: [WikiListComponent]
})
export class WikiModule { }
