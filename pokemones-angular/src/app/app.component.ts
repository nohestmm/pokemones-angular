import { Component } from '@angular/core';

@Component({
  selector: 'poke-root',//<poke-root></poke-root>
  template: `
  <app-navbar></app-navbar>
  <app-sidebar></app-sidebar>
  <app-dashboard></app-dashboard>
  `,
 
})
export class AppComponent {
  
}
