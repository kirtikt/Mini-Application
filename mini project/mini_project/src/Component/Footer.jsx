// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        &copy; {new Date().getFullYear()} Kirti. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
