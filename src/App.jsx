import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Projects from "./components/Projects/Projects";
import Value from "./components/Values/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header />
      <Hero />
      </div>
      <Companies />
      <Projects />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
