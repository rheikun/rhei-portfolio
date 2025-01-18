import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "portfolio_rhei",
        "template_sqjsj0q",
        e.target,
        "T6qeNo3A_1C5IiecM"
      )
      .then(
        () => {
          setIsSnackbarVisible(true);
          setIsSubmitting(false);
          e.target.reset();

          setTimeout(() => {
            setIsSnackbarVisible(false);
          }, 3000);
        },
        () => {
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="bg-black text-white min-h-screen pt-20">
      <Navbar />
      <section className="max-w-screen-lg mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">Contact Me</h1>
        <p className="text-gray-400 mb-10">
          Feel free to get in touch. I would love to hear from you!
        </p>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-10 mb-10">
          <a
            href="mailto:rheisanfrs@gmail.com"
            className="text-yellow-500 text-4xl hover:text-yellow-400 transition transform hover:scale-110 duration-300"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://instagram.com/rheisanfrs"
            target="_blank"
            className="text-yellow-500 text-4xl hover:text-yellow-400 transition transform hover:scale-110 duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/in/rheisanfrs"
            target="_blank"
            className="text-yellow-500 text-4xl hover:text-yellow-400 transition transform hover:scale-110 duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/rheikun"
            target="_blank"
            className="text-yellow-500 text-4xl hover:text-yellow-400 transition transform hover:scale-110 duration-300"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={handleFormSubmit}
          data-aos="fade-up"
        >
          <div>
            <label className="block text-left mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none border border-yellow-500"
              required
            />
          </div>
          <div>
            <label className="block text-left mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none border border-yellow-500"
              required
            />
          </div>
          <div>
            <label className="block text-left mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none border border-yellow-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 mt-4 rounded-md ${
              isSubmitting ? "bg-gray-500" : "bg-yellow-500 hover:bg-yellow-600"
            } text-white font-semibold transition duration-300`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Snackbar */}
        {isSnackbarVisible && (
          <div
            className="fixed bottom-5 right-5 bg-yellow-500 text-black py-2 px-4 rounded-lg shadow-lg transition-opacity duration-300"
            data-aos="fade-up"
          >
            Message sent successfully!
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
