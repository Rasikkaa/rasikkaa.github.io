import { useMemo, useState } from "react";

const ContactSection = ({ profile }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const targetEmail = useMemo(() => import.meta.env.VITE_CONTACT_EMAIL || "", []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!targetEmail) {
      setStatus("Set VITE_CONTACT_EMAIL in .env.local to activate email sending.");
      return;
    }

    const fallbackSubject = `Portfolio inquiry from ${formData.firstName} ${formData.lastName}`.trim();
    const subject = encodeURIComponent(formData.subject || fallbackSubject);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client...");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-panel glass-card" data-reveal>
          <div>
            <p className="section-eyebrow">Contact</p>
            <h2>Let's Connect</h2>
            <p>
              Ready to bring your ideas to life? Let's discuss your project and create something professional together.
            </p>

            <div className="contact-info-list">
              <div>
                <span>Address</span>
                <strong>{profile.address}</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>{profile.phone}</strong>
              </div>
              <div>
                <span>Follow Me</span>
                <div className="contact-links">
                  <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {profile.linkedinUrl ? (
                    <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={onChange}
              placeholder="First name"
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={onChange}
              placeholder="Last name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={onChange}
              placeholder="+91 xxxxxxxxxx"
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={onChange}
              placeholder="Project discussion"
            />

            <label htmlFor="message">Write your message here...</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={onChange}
              placeholder="Tell me about your project or opportunity."
              required
            />

            <button type="submit" className="button button-primary button-submit">
              Send Message
            </button>
            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
