import { Component } from '@angular/core';

@Component({
  selector: 'app-poperty-card',
  templateUrl: './poperty-card.component.html',
  styleUrl: './poperty-card.component.css'
})
export class PopertyCardComponent {
  Property:any={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }
}
