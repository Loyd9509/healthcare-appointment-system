import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          <span className="logo-icon">✚</span>
          MediCare
        </a>
        <p>Care, comfort, and convenience.</p>
      </footer>
    </div>
  );
}

export default App;
