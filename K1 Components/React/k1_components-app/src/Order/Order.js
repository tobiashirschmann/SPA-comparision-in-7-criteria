import React from "react";

class Order extends React.Component {

     render()
     {
        return (
             <div>
                 <p>Artikel: {this.props.artikel} </p>
                 <p>Menge: {this.props.menge} Stück</p>
                 <p>Preis: {this.props.preis}€</p>
                 <p>Gesamt: {this.getGesamtPreis()}€</p>
             </div>  
        )
    }
    
    getGesamtPreis()  {
        return (Number(this.props.preis)* Number(this.props.menge)).toFixed(2);
    }
  }

  export default Order;

