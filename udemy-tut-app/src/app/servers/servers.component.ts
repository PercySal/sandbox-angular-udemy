import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //by tag <app-servers><app-servers>
  //selector: '[app-servers]', //by attribute <div apps-servers></div>
  //selector: '.app-servers', //by class <div class="app-servers"></div>
  //Backticks `` for multiline, '' for single line
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
