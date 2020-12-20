import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen';


const App = () => {
  return (
    <Router>
      <Header />
      {/* bootstrap class of -3 */}
      <main className='py-3'>
        {/* Container reframes everything to the center */}
        <Container>
          {/* Default route when / path hit */}
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen}/>
          {/* hits the cart and if needed the id */}
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
