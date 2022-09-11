
import './App.css';
import Order from './Order/Order';

function App() {
  return (<div>
            <h1>Meine Bestellungen</h1>
            <Order artikel="Schweizer Bergkäse" menge="5" preis="3.99"/>
            <Order artikel="Frankreicher Brocciu" preis="0" menge="500"></Order>
            <Order artikel="Italienischer Parmesankäse" preis="-2" menge="30"></Order>
          </div>
  );
}

export default App;
