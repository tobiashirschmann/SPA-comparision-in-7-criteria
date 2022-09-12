import AppRouter from "./AppRouter";

export default function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <ul>
            <li><a href="/orders"> Meine Bestellungen </a></li>
             <li><a href="/account"> Mein Konto </a></li>
             <li><a href="/recommendations"> Empfehlungen </a></li>
          </ul>
        </div>
      </nav>
      <AppRouter/>
    </div>
  );
}