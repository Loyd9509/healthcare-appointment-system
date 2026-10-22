import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Booking from "./components/Booking";
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Booking />
        <section className="about-section" id="about">
          <div className="section-heading">
            <span className="eyebrow">ABOUT MEDICARE</span>
            <h2>Your care comes first.</h2>
            <p>
              MediCare helps patients explore healthcare professionals and
              request appointments through a simple, user-friendly experience.
            </p>
          </div>
        </section>
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
