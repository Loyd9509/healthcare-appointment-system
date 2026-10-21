import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">✚</span>
          MediCare
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#about">About</a>
        </div>

        <a className="nav-button" href="#appointments">
          Book Appointment
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">YOUR HEALTH, OUR PRIORITY</span>

            <h1>
              Healthcare made
              <span> simple for you.</span>
            </h1>

            <p>
              Find the right doctor, book your appointment, and take a step
              toward a healthier life.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#appointments">
                Book an Appointment →
              </a>

              <a className="secondary-button" href="#doctors">
                Explore Doctors
              </a>
            </div>

            <div className="trust-note">
              <span className="trust-icon">✓</span>
              Simple booking. Caring professionals.
            </div>
          </div>

          <div className="hero-visual">
            <div className="medical-card">
              <div className="medical-symbol">✚</div>
              <span className="medical-label">YOUR HEALTH MATTERS</span>
              <h2>Care that puts you first.</h2>
              <p>Convenient appointments and a better healthcare experience.</p>

              <div className="card-footer">
                <span className="status-dot"></span>
                Here for your wellbeing
              </div>
            </div>

            <div className="floating-badge">♡ Care starts here</div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Healthcare, made easier.</h2>
            <p>Everything you need to get started with your care.</p>
          </div>

          <div className="service-grid">
            <article className="service-card" id="doctors">
              <div className="service-icon">♙</div>
              <h3>Find a Doctor</h3>
              <p>Explore doctors and their medical specialties.</p>
            </article>

            <article className="service-card" id="appointments">
              <div className="service-icon">▦</div>
              <h3>Book Appointments</h3>
              <p>Plan your visit with a simple booking experience.</p>
            </article>

            <article className="service-card" id="about">
              <div className="service-icon">♡</div>
              <h3>Patient First</h3>
              <p>Designed to make accessing care more convenient.</p>
            </article>
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
