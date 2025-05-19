import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Image, Alert, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const Display = () => {
  const { productId } = useParams(); // The product ID from the URL params
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    price: '',
    imgPath: '',
    category: '', // Category directly from the product
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // Error state to display messages
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Fetch Product Details
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(''); // Clear any previous errors
      try {
        const response = await fetch(`https://localhost:7263/api/products/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const result = await response.json();
        setFormData({
          productId: result.productId,
          productName: result.name,
          price: result.price,
          imgPath: result.imageUrl,
          category: result.category, // Directly from the product
        });
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Failed to load product data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId, token]);

  const { productName, price, imgPath, category } = formData;

  // Handle Edit or any other action
  const handleEdit = () => {
    navigate(`/edit-product/${productId}`); // Assuming you have an edit page
  };

  return (
    <Container className="mt-4">
      {error && <Alert variant="danger">{error}</Alert>}

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2 className="text-center">Product Details</h2>
          <Row>
            {/* Product Information Card */}
            <Col lg={8}>
              <Card className="mb-4">
                <Card.Header>Product Information</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formProductId">
                      <Form.Label>Product ID:</Form.Label>
                      <Form.Control type="text" name="productId" value={productId} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formProductName">
                      <Form.Label>Product Name:</Form.Label>
                      <Form.Control disabled type="text" name="productName" value={productName} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPrice">
                      <Form.Label>Price:</Form.Label>
                      <Form.Control disabled type="text" name="price" value={price} />
                    </Form.Group>

                  

                    <Form.Group className="mb-3" controlId="formCategory">
                      <Form.Label>Category:</Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        name="category"
                        value={category || 'Unknown Category'} // Fallback for missing category
                      />
                    </Form.Group>

                  
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Product Image */}
            <Col lg={4} align="center">
              {imgPath ? (
                <Image
                  src={`https://localhost:7263${imgPath}`}
                  alt={productName}
                  thumbnail
                  style={{ maxHeight: '300px', width: 'auto' }}
                />
              ) : (
                'No image available'
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Display;
