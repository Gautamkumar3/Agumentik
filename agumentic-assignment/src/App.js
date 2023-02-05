
import "./App.css";
import About from "./Component/About";
import CardSec from "./Component/CardSec";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Resources from "./Component/Resources";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resources />
      <CardSec />
    </div>
  );
}

export default App;
