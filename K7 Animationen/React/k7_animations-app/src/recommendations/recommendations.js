import React from "react";
import UserContext from "../UserContext/userContext";
import { motion } from "framer-motion";

class Recommendations extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    // This binding is necessary to make `this` work in the callback
    this.inDenWarenkorb = this.inDenWarenkorb.bind(this);
  }

  inDenWarenkorb() {
    const { value, setValue } = this.context;
    setValue(Number(value) + 1);
  }

  componentDidMount() {
    fetch("https://localhost:7281/Recommendation")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Empfehlungen</h1>
          Error: {error.message}
        </motion.div>
      );
    } else if (!isLoaded) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Empfehlungen</h1>Bitte warten...
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Empfehlungen</h1>
          <ol>
            {items.map((item) => (
              <li key={item.id}>
                <p>
                  <strong>{item.description}</strong>{" "}
                </p>
                <p>Bewertung: {item.rating}/5</p>
                <p>Preis: {item.price}€</p>

                <p>
                  Versand:{" "}
                  {item.deliveryCost <= 0
                    ? "Kostenlos"
                    : item.deliveryCost + "€"}
                </p>
                <p>{item.summary}</p>

                <button onClick={this.inDenWarenkorb}>In den Warenkorb</button>
              </li>
            ))}
          </ol>
        </motion.div>
      );
    }
  }
}
export default Recommendations;
