function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <span className="eyebrow">WHAT WE OFFER</span>
        <h2>Healthcare, made easier.</h2>
        <p>Everything you need to get started with your care.</p>
      </div>

      <div className="service-grid">
        {/* Find a Doctor */}
        <a className="service-card" id="find-doctor-card" href="#doctors">
          <div className="service-icon">♙</div>
          <h3>Find a Doctor</h3>
          <p>Explore doctors and their medical specialties.</p>
        </a>

        {/* Book Appointments */}
        <a className="service-card" id="appointments" href="#appointments">
          <div className="service-icon">▦</div>
          <h3>Book Appointments</h3>
          <p>Plan your visit with a simple booking experience.</p>
        </a>

        {/* Patient First */}
        <a className="service-card" id="about" href="#about">
          <div className="service-icon">♡</div>
          <h3>Patient First</h3>
          <p>Designed to make accessing care more convenient.</p>
        </a>
      </div>
    </section>
  );
}

export default Services;
