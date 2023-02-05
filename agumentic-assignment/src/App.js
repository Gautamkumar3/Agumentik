import "./App.css";
import About from "./Component/About";
import CardSec from "./Component/CardSec";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Plan from "./Component/Plan";
import Resources from "./Component/Resources";
import Team from "./Component/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resources />
      <CardSec />
      <Team />
      <Plan />
    </div>
  );
}

export default App;
