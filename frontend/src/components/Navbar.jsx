function Navbar() {
  return (
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
  );
}

export default Navbar;
