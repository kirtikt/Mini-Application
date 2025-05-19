// src/components/ContactUs.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p><strong>Address:</strong> SM Vita Juhu 400049, india </p>
      <p><strong>Email:</strong> support@kirti.com</p>
      <p><strong>Phone:</strong> +91 123456789</p>
      <p><strong>Working Hours:</strong> Mon – Fri: 9 AM – 6 PM</p>
    </Container>
  );
};

export default ContactUs;
