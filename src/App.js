import Header from "./Header";
import Cities from "./Cities";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App p-4">
      <div className="container border border-2 border-secondary rounded">
        <Header />
        <Cities />
        <Search />
        <Footer />
      </div>
      <small className="open-source">
        <a
          href="https://github.com/JoseaneGrigolo/react-lesson"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <em> by Joseane Grigolo</em>
      </small>
    </div>
  );
}

export default App;
