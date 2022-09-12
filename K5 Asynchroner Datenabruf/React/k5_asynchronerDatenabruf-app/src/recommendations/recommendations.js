import React from "react";

class Recommendations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      componentDidMount() {
        fetch("https://localhost:7281/Recommendation")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      render() {       
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>
            <h1>Meine Bestellungen</h1>
            Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div><h1>Meine Bestellungen</h1>Bitte warten...</div>;
        } else {
          return (
            <div>
              <h1>Meine Bestellungen</h1>
              <ol>
                {items.map(item => (
                  <li key={item.id}>
                    <p><strong>{item.description}</strong> </p>
                    <p>Bewertung: {item.rating}/5</p>
                    <p>Preis: {item.price}€</p>
                    <p>Versand: {item.deliveryCost <= 0 ? 'Kostenlos' : item.deliveryCost+'€'}</p>
                    <p>{item.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
          );
        }
      }
    }
  export default Recommendations;

