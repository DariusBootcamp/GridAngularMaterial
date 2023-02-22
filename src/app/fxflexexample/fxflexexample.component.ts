import { Component } from '@angular/core';


@Component({
  selector: 'app-fxflexexample',
  templateUrl: './fxflexexample.component.html',
  styleUrls: ['./fxflexexample.component.css']
})
export class FxflexexampleComponent {
  tiles = [
    {text: 'One', cols: 2, rows: 1, color: '#142A5C'},
    {text: 'Two', cols: 1, rows: 2, color: '#B7A0E8'},
    {text: 'Three', cols: 1, rows: 2, color: '#FF0000'},
    {text: 'Four', cols: 1, rows: 1, color: '#D9EDD9'},
    {text: 'Five', cols: 2, rows: 1, color: '#D10DD9'},
  ];
}
