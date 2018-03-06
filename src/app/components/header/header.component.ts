import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item [routerLink]="['/login']">Login</button>
      <button mat-menu-item [routerLink]="['/lazy-demo-1']">Lazy Demo 1</button>
      <button mat-menu-item [routerLink]="['/lazy-demo-2']">Lazy Demo 2</button>
    </mat-menu>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
