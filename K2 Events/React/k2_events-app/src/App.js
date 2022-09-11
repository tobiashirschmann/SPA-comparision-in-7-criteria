
import './App.css';
import Order from './Order/Order';

function App() {
  return (<div>
            <h1>Meine Bestellungen</h1>
            <Order artikel="Schweizer Bergkäse" menge="5" preis="3.99"/>
          </div>
  );
}

export default App;
