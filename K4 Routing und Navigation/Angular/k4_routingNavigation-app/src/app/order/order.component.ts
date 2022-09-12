import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input('artikel') artikel = '';
  @Input('preis') preis = '';
  @Input('menge') menge = '';

  waehrung : string = "€";
  zeigeArtikel : boolean = true;

  ngOnInit(): void {
    if (Number(this.preis) <= 0 || Number(this.menge) <= 0)
    {
      this.zeigeArtikel = false;
    }
  }

  public getWaehrungsanzeige() : string {
    return this.waehrung == "€" ? "In $ anzeigen" : "In € anzeigen";
  }

  public getGesamtPreis() : string {
    return (Number(this.preis)* Number(this.menge)).toFixed(2);
  }

  public waehrungUmschalten(){
    if (this.waehrung == "€")
    {
      this.preis = (Number(this.preis) * 1.03).toFixed(2);
      this.waehrung = "$"
    }
    else
    {
      this.preis = (Number(this.preis) / 1.03).toFixed(2);
      this.waehrung = "€"
    }
  }
} 

