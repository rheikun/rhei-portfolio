import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [showCvOptions, setShowCvOptions] = useState(false); 

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <section className="bg-black text-white py-20 relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Hello, I&apos;m{" "}
            <span className="text-yellow-500 whitespace-nowrap">
              Rheisan Firnandatama
            </span>
          </h1>
          <div className="text-xl md:text-2xl font-semibold text-yellow-500">
            <Typewriter
              words={["ML Engineer", "Data Scientist"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <p className="text-lg md:text-xl text-gray-300" data-aos="fade-up">
            I&apos;m a Machine Learning Engineer based in Yogyakarta. I have a
            passion for Machine Learning and Artificial Intelligence.
          </p>
          <div
            className="flex flex-wrap justify-center md:justify-start space-x-4"
            data-aos="fade-up"
          >
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded font-medium transition duration-300"
            >
              Contact Info
            </a>
            {/* Download CV Button */}
            <button
              onClick={() => setShowCvOptions(!showCvOptions)}
              className="border border-yellow-500 hover:bg-yellow-600 hover:text-black text-yellow-500 py-2 px-4 rounded font-medium transition duration-300"
            >
              Download CV 📄
            </button>
          </div>
          {/* CV Options */}
          {showCvOptions && (
            <div
              className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4"
              data-aos="fade-up"
            >
              <a
                href="https://drive.google.com/file/d/1f1fHKtctvOB08XRULSphumiOqxujuYYs/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black border border-yellow-500 hover:bg-blue-600 hover:text-white py-2 px-4 rounded font-medium transition duration-300"
              >
                Indonesian CV
              </a>
              <a
                href="https://drive.google.com/file/d/1ckouvnjbd1d0-ZPQzwi_7e1QP68w3E-L/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black border border-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded font-medium transition duration-300"
              >
                English CV
              </a>
            </div>
          )}
          <div
            className="flex justify-center md:justify-start space-x-6 mt-6"
            data-aos="fade-up"
          >
            <a
              href="https://www.instagram.com/rheisanfrs"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/rheisanfrs"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/rheikun"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500 hover:text-yellow-600"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div
          className="relative flex justify-center md:justify-end"
          data-aos="fade-up"
        >
          <div className="w-96 h-96 md:w-112 md:h-112">
            <img
              src="photo-2.png"
              alt="Profile"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
