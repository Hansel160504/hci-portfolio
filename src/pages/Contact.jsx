// Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // REPLACE THESE VALUES WITH YOUR ACTUAL EMAILJS KEYS
    // (See instructions below on where to get them)
    const SERVICE_ID = "service_mzko6hq";
    const TEMPLATE_ID = "template_tuhzmdk";
    const PUBLIC_KEY = "hiw2TaCHp1YorS2VW";

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Clears the form after sending
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="content">
      
      {/* LEFT SIDE — Contact Info */}
      <div className="left">
        <section className="intro">
          <h2>Contact Me</h2>
          <p>
            I'm always open to new opportunities, collaborations, and projects.
            Feel free to reach out, and I’ll get back to you as soon as possible.
          </p>
        </section>

        <section className="contact" style={{ marginTop: "20px" }}>
          <h3>Get in Touch</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:dominguitohans16@gmail.com">
              dominguitohans16@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +63 9055035202
          </p>
          <p>
            <strong>Location:</strong> Philippines
          </p>
        </section>

        <section className="contact" style={{ marginTop: "20px" }}>
          <h3>Socials</h3>
          <ul style={{ color: "#9aa6b2", marginLeft: "20px", lineHeight: "2" }}>
            <li>
              <a href="https://github.com/Hansel160504" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/koykoy.dominguito.5" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* RIGHT SIDE — Contact Form */}
      <aside className="right">
        <div className="qualifications">
          <h4>Send me a message</h4>

          {/* Added 'ref={form}' and 'onSubmit={sendEmail}' */}
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            
            {/* Added name="user_name" */}
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
            />
            
            {/* Added name="user_email" */}
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              required 
            />
            
            {/* Added name="message" */}
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="4" 
              required
            ></textarea>
            
            <button type="submit" className="resume-btn">
              Send Message
            </button>
          </form>
        </div>
      </aside>

    </div>
  );
}