import React from 'react'

function Home() {
  const bgStyle = {
    backgroundImage: "url('/home-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    overflow:'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={bgStyle}>
      <h1>Welcome to Home Page</h1>
    </div>
  );
}

export default Home;