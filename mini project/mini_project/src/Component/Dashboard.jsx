import React, { useEffect, useState, Suspense } from 'react';
import { Button, Container, Image, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

// Lazy load Tabs and Table components
const Tabs = React.lazy(() => import('react-bootstrap/Tabs'));
const Tab = React.lazy(() => import('react-bootstrap/Tab'));
const Table = React.lazy(() => import('react-bootstrap/Table'));

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();
  const { dispatchCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');

      try {
        const res = await fetch('https://localhost:7263/api/products', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setProducts(data);
        console.log(products)

        const uniqueCategories = [...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
        setActiveCategory(null); // Start with no tab selected

      } catch (err) {
        console.error('Error:', err);
        if (err.message.includes('401')) {
          alert('Unauthorized. Please login.');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleAddToCart = (product) => {
    dispatchCart({ type: 'ADD_TO_CART', payload: product });
    setAlertMessage(`${product.name} added to cart!`);
    setTimeout(() => setAlertMessage(''), 3000);
  };

  return (
    <Container>
      {alertMessage && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          minWidth: '300px',
        }}>
          <Alert variant="success" onClose={() => setAlertMessage('')} dismissible>
            {alertMessage}
          </Alert>
        </div>
      )}

      <h2 className="text-center my-4">Ecommerce</h2>
      <hr />

      <Container className="shadow px-4 py-3">
        <div className='d-flex justify-content-between align-items-center'>
          <h4>Product List</h4>
        </div>

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Suspense fallback={<div>Loading Categories...</div>}>
            <Tabs
              activeKey={activeCategory}
              onSelect={(k) => setActiveCategory(k)}
              className="mb-3"
              id="category-tabs"
            >
              {categories.map(category => (
                <Tab eventKey={category} title={category} key={category}>
                  {activeCategory === category && (
                    <Suspense fallback={<div>Loading Products...</div>}>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price ($)</th>
                            <th>Actions</th>
                            <th>Add to Cart</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products
                            .filter(p => p.category === activeCategory)
                            .map(p => (
                              <tr key={p.productId}>
                                <td>{p.productId}</td>
                                <td>{p.name}</td>
                                <td>
                                  {p.imageUrl ? (
                                    <Image
                                      src={`https://localhost:7263${p.imageUrl}`}
                                      alt={p.name}
                                      thumbnail
                                      style={{ width: '80px' }}
                                    />
                                  ) : 'No image'}
                                </td>
                                <td>{p.price.toFixed(2)}</td>
                                <td>
                                  <Button
                                    variant="primary"
                                    className="me-2"
                                    as={Link}
                                    to={`/products/view/${p.productId}`}
                                  >
                                    View
                                  </Button>
                                </td>
                                <td>
                                  <Button
                                    variant="success"
                                    onClick={() => handleAddToCart(p)}
                                  >
                                    Add to Cart
                                  </Button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </Suspense>
                  )}
                </Tab>
              ))}
            </Tabs>
          </Suspense>
        )}
      </Container>
    </Container>
  );
};

export default Dashboard;
