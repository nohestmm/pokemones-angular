import { Component } from '@angular/core';

@Component({
  selector: 'poke-root',//<poke-root></poke-root>
  styleUrls:['app.component.css'],

template:`
<app-filter></app-filter>
<app-dashboard></app-dashboard>
<app-details></app-details>
`



 
})
export class AppComponent {
  
}
