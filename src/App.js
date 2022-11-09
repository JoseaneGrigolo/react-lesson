import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App - React</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
