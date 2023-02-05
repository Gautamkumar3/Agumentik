import "./App.css";
import About from "./Component/About";
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
    </div>
  );
}

export default App;
