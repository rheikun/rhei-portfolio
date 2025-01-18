import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { certifications } from "../data/certifications";

const Certifications = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div id="certifications" className="bg-black text-white min-h-screen pt-20">
            {/* Navbar */}
            <Navbar />

            {/* Certification Section */}
            <section className="max-w-screen-lg mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-14 text-center">
                    My <span className="text-yellow-500">Certifications</span>
                </h1>

                {/* Certification Cards */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
                    data-aos="fade-up"
                >
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-transform duration-500 hover:scale-105 flex flex-col h-full"
                            onClick={() => window.open(cert.link, "_blank")}
                        >
                            <img
                                src={cert.image}
                                alt={cert.name}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-4">{cert.name}</h3>
                            <p className="text-sm text-gray-400 mb-4">{cert.issued}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Certifications;
