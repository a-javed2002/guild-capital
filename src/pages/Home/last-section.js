import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";



const FormSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="form-container form-section rem7-marginTop rem7-marginbottom">
            <div className="form-left">
                <h2><i>Get in touch with us</i></h2>
                <p>Learn how GUILD Capital can help you succeed. <br></br> Talk to one of our experts today!</p>

            </div>

            <form className="form-right" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        required
                    />
                    You agree to Guild Terms of Use & Privacy Policy
                </label>
                <button type="submit" className="fill-button">
  Join Now <FaChevronRight />
</button>

            </form>
        </div>
    );
};

export default FormSection;
