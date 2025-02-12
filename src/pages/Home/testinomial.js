import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState([
        { id: 1, img: "/assets/images/testinomial1.png", name: "Constance Julien", role: "Chief Factors Technician", quote: "Joining this platform was a game-changer for me. The educational resources helped me understand crypto trading, and the community support is invaluable. Highly recommended!" },
        { id: 2, img: "/assets/images/testinomial2.png", name: "Alex Smith", role: "Crypto Analyst", quote: "A must-have tool for any crypto enthusiast!" },
        { id: 3, img: "/assets/images/testinomial3.png", name: "Emily Carter", role: "Blockchain Developer", quote: "I learned so much about blockchain here." }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonials(prevTestimonials => {
                const newTestimonials = [...prevTestimonials];
                newTestimonials.push(newTestimonials.shift()); // Move the first item to the last
                return newTestimonials;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rem5-marginTop testinomial">
            <h1 className="primary text-center">Nextronium Testimonials</h1>

            <div className="container">
                {/* Quote and Active Testimonial */}
                <center>
                    <div className="row mt-4 align-items-center quote">
                        <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                            <motion.img
                                key={testimonials[0].id}
                                src="/assets/images/Vector.png"
                                loading="lazy"
                                className="Testimonials-quote-img"
                                alt="Quote"
                                initial={{ opacity: 0, rotate: -10 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 intro">
                            <motion.p
                                key={testimonials[0].id}
                                className="white-txt p-3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 1 }}
                            >
                                "{testimonials[0].quote}"
                            </motion.p>
                        </div>
                    </div>
                </center>

                {/* Testimonial Cards with Animation */}
                <div className="d-flex flex-wrap gap-4 justify-content-center mt-0">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className={`testinomial-card d-flex flex-column justify-content-end ${index === 0 ? "active" : ""}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={testimonial.img}
                                loading="lazy"
                                className={`second img-fluid ${index === 0 ? "active-img" : ""}`}
                                alt={`Testimonial ${testimonial.id}`}
                            />
                            <div className="mx-4 text-center">
                                <h5 className="white-txt">{testimonial.name}</h5>
                                <p>{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
