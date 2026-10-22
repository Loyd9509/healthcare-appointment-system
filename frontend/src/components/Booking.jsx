import { useState } from "react";

function Booking() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Your appointment request has been submitted!");
  }

  return (
    <section className="booking-section" id="booking">
      <div className="section-heading">
        <span className="eyebrow">BOOK YOUR VISIT</span>
        <h2>Schedule an appointment.</h2>
        <p>Fill in the form below to request an appointment with a doctor.</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Full Name</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientEmail">Email Address</label>
          <input
            type="email"
            id="patientEmail"
            name="patientEmail"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="doctor">Choose a Doctor</label>
          <select id="doctor" name="doctor" required defaultValue="">
            <option value="" disabled>
              Select a doctor
            </option>
            <option value="Dr. Sarah Johnson">
              Dr. Sarah Johnson - Cardiologist
            </option>
            <option value="Dr. Michael Brown">
              Dr. Michael Brown - Dermatologist
            </option>
            <option value="Dr. Emily Davis">
              Dr. Emily Davis - Pediatrician
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            required
          />
        </div>

        <button type="submit" className="primary-button">
          Request Appointment
        </button>

        {message && (
          <p className="booking-message" role="status">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Booking;
