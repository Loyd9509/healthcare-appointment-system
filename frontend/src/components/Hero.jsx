function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">YOUR HEALTH, OUR PRIORITY</span>

        <h1>
          Healthcare made
          <span> simple for you.</span>
        </h1>

        <p>
          Find the right doctor, book your appointment, and take a step toward a
          healthier life.
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
  );
}

export default Hero;
