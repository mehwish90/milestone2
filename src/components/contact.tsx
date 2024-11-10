import React from 'react';
import '../app/styles/contact.css';  // Importing the custom CSS file

const Contact = () => {
  return (
    <div id='Contact'>
      <section className="contact-section">
        <div className="container">
          <div className="map-container">
          <iframe
  width="100%" // Using percentage for width
  height="100%" // Using percentage for height
  className="absolute inset-0"
  frameBorder={0}
  title="map"
  scrolling="no"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.369003201249!2d67.03304119999999!3d24.885391900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e4fbf9c9649%3A0x84b4faaf132f90a5!2sGarden%20East%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731004296057!5m2!1sen!2s"
  style={{ filter: "contrast(1.2) opacity(0.6)" }}
/>

            <div className="contact-info">
              <div className="address">
                <h2>ADDRESS</h2>
                <p>Garden East, Karachi</p>
              </div>
              <div className="email-phone">
                <h2>EMAIL</h2>
                <a href="mailto:kashifmehwish861@gmail.com">kashifmehwish861@gmail.com</a>
                <h2>PHONE</h2>
                <p>03334141206</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h2>Contact</h2>
            <p>Feel free to contact</p>
            <form>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
