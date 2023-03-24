import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import {About} from "./components/About";
import {Projects} from "./components/Projects";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
