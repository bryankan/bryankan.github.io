import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Projects} from "./components/Projects";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Home />
        {/*<About />*/}
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
