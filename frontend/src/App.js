import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      {/* bootstrap class of -3 */}
      <main className='py-3'>
        {/* Container reframes everything to the center */}
        <Container>
          <h1>Welcome to your Web App</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
