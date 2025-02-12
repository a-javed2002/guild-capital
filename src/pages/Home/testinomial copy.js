import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState([
        { id: 1, img: "/assets/images/testinomial1.png", name: "Constance Julien", role: "Chief Factors Technician" },
        { id: 2, img: "/assets/images/testinomial2.png", name: "Alex Smith", role: "Crypto Analyst" },
        { id: 3, img: "/assets/images/testinomial3.png", name: "Emily Carter", role: "Blockchain Developer" }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonials(prev => {
                const newOrder = [...prev];
                newOrder.push(newOrder.shift()); // Moves the first item to the end
                return newOrder;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rem5-marginTop testinomial">
            <h1 className="primary text-center">Nextronium Testimonials</h1>

            <div className="container">
                {/* Quote and Intro */}
                <center>
                    <div className="row mt-4 align-items-center quote">
                        <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                            <img src='/assets/images/Vector.png' loading="lazy" className="Testimonials-quote-img" alt="Quote" />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 intro">
                            i want also a data update accordin to the active image first image will b ethe active one when image change also acontent change
                            <p className="white-txt p-3">
                            
                                "Joining this platform was a game-changer for me. The educational resources helped me understand crypto trading, and the community support is invaluable. Highly recommended!"
                            </p>
                        </div>
                    </div>
                </center>

                {/* Testimonial Cards with Animation */}
                <div className="d-flex flex-wrap gap-4 justify-content-center mt-0">
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={testimonial.id} 
                            className="testinomial-card d-flex flex-column justify-content-end"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={testimonial.img} loading="lazy" className="img-fluid" alt={`Testimonial ${testimonial.id}`} />
                            <div className="mx-4">
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
