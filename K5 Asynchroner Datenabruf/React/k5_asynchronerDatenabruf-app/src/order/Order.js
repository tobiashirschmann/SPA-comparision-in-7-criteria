import React from "react";

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = { waehrung: "€", preis: props.preis };
    
        // This binding is necessary to make `this` work in the callback
        this.waehrungUmschalten = this.waehrungUmschalten.bind(this);
      }

    getWaehrungsanzeige()  {
      return this.state.waehrung === "€" ? "In $ anzeigen" : "In € anzeigen";
    }
  
    waehrungUmschalten(){
      if (this.state.waehrung === "€")
      {
        this.setState({waehrung: "$", preis: (Number(this.state.preis) * 1.03).toFixed(2)});

      }
      else
      {
        this.setState({waehrung: "€", preis: (Number(this.state.preis) / 1.03).toFixed(2)});
      }
    }

    getGesamtPreis()  {
        return (Number(this.state.preis)* Number(this.props.menge)).toFixed(2);
    }

    render()
    {
      if (Number(this.state.preis) <= 0 || Number(this.props.menge) <= 0)
      {
          return null;
      }

       return (
            <div>
               <p>Artikel: {this.props.artikel} </p>
               <p>Menge: {this.props.menge} Stück</p>
               <p>Preis: {this.state.preis}{this.state.waehrung}</p>
               <p>Gesamt: {this.getGesamtPreis()}{this.state.waehrung}</p>

               <button onClick={this.waehrungUmschalten}>
                   {this.getWaehrungsanzeige()}
               </button>
            </div>         
       )
   }
  }

  export default Order;

