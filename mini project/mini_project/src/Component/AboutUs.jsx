// src/components/AboutUs.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p>
        Welcome to <strong>Smart Stay</strong> – your one-stop destination for quality products across fashion, electronics, and home decor.
        We bring together the latest trends in clothing, cutting-edge gadgets, and beautiful decor pieces to elevate your lifestyle.
      </p>
      <p>
        Our mission is to deliver premium products at affordable prices with a smooth and secure shopping experience.
        Whether you're looking to refresh your wardrobe, upgrade your devices, or enhance your living space,
        we've got something for everyone.
      </p>
      <p>
        Thank you for choosing Smart Stay. We’re here to serve you better every day.
      </p>
    </Container>
  );
};

export default AboutUs;
