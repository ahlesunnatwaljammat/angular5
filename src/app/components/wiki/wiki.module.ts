import { NgModule } from '@angular/core';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiHomeComponent } from './wiki-home/wiki-home.component';

@NgModule({
  imports: [
    WikiRoutingModule
  ],
  declarations: [WikiHomeComponent]
})
export class WikiModule { }
