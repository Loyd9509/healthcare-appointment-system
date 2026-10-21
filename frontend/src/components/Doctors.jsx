function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "8 years of experience",
      icon: "♡",
    },
    {
      id: 2,
      name: "Dr. Michael Brown",
      specialty: "Dermatologist",
      experience: "6 years of experience",
      icon: "✦",
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      experience: "10 years of experience",
      icon: "✚",
    },
  ];

  return (
    <section className="doctors-section" id="doctors">
      <div className="section-heading">
        <span className="eyebrow">MEET OUR DOCTORS</span>
        <h2>Find the right doctor for you.</h2>
        <p>Explore our sample list of healthcare professionals.</p>
      </div>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <article className="doctor-card" key={doctor.id}>
            <div className="doctor-avatar">{doctor.icon}</div>

            <h3>{doctor.name}</h3>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <p>{doctor.experience}</p>

            <button
              className="primary-button"
              onClick={() =>
                alert(`Appointment booking for ${doctor.name} is coming soon!`)
              }
            >
              Book Appointment
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Doctors;
