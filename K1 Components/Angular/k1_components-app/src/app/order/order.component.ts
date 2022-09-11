import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input('artikel') artikel = '';
  @Input('preis') preis = '';
  @Input('menge') menge = '';

  public getGesamtPreis() : string {
    return (Number(this.preis)* Number(this.menge)).toFixed(2);
  }
}
