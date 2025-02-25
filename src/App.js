// src/App.js
// src/App.js
// src/App.js
// src/App.js
// src/App.js
// src/App.js
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Checkout from './pages/Checkout';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';

const products = [
  { _id: '1', name: 'T shirt', image: 'https://i.pinimg.com/236x/1e/cf/f5/1ecff53ab0ab271474441dcfd1e7542b.jpg', price: 59.99 , category: 'Men' },
  { _id: '2', name: 'Baggiee', image: 'https://i.pinimg.com/236x/8c/0c/4b/8c0c4b05ca1047505c9ff216a7fe5821.jpg', price: 39.99, category: 'Men'},
  { _id: '3', name: 'Casual', image: 'https://i.pinimg.com/236x/51/41/44/514144a433b7c234ab3d087e79d69913.jpg', price: 29.99, category: 'Men' },
  { _id: '4', name: 'Unisex', image: 'https://i.pinimg.com/236x/d7/46/27/d7462704e0380e15df45ef99974f96db.jpg', price: 19.99 , category: 'Men'},
  { _id: '5', name: 'Handloom', image: 'https://i.pinimg.com/736x/9a/8a/43/9a8a4399dd6fa5e6b0d794034e2a2fde.jpg', price: 59.99 , category: 'Men'},
  { _id: '6', name: 'T shirt', image: 'https://i.pinimg.com/236x/91/45/32/9145325a57ea02ce25b220351c92c7ea.jpg', price: 39.99 , category: 'Men'},
  { _id: '7', name: 'T shirt', image: 'https://i.pinimg.com/736x/80/81/8b/80818bf9360b9fcfe78a79367e81cb69.jpg', price: 29.99 , category: 'Men'},
  { _id: '8', name: 'T shirt', image: 'https://i.pinimg.com/236x/c3/0c/60/c30c60ba9ef22f2e684366b55a71dbb2.jpg', price: 19.99 , category: 'Men'},

  { _id: '1', name: 'T shirt', image: 'https://i.pinimg.com/236x/f9/da/f8/f9daf8994c02b8cca330775f4e601ba3.jpg', price: 59.99 , category: 'Men'},
  { _id: '2', name: 'Baggiee', image: 'https://i.pinimg.com/236x/13/b4/f7/13b4f7469e6982103a0a992234b99723.jpg', price: 39.99 , category: 'Men'},
  { _id: '3', name: 'Casual', image: 'https://i.pinimg.com/236x/af/63/18/af6318956a2032b567dede8fdd194395.jpg', price: 29.99, category: 'Men' },
  { _id: '4', name: 'Unisex', image: 'https://i.pinimg.com/236x/20/e6/fe/20e6fe1fadd3a0b579ec3a4e82d10cf8.jpg', price: 19.99 , category: 'Men'},
  { _id: '5', name: 'Handloom', image: 'https://i.pinimg.com/236x/7e/9d/35/7e9d358d4293d125cd81f32c94270638.jpg', price: 59.99 , category: 'Men'},
  { _id: '6', name: 'T shirt', image: 'https://i.pinimg.com/236x/b3/1d/3b/b31d3b5fb1a285b1cc834c0e49de6d1b.jpg', price: 39.99 , category: 'Men'},
  { _id: '7', name: 'T shirt', image: 'https://i.pinimg.com/236x/a5/07/15/a50715c57d53809f3b7e91a2fabab3b2.jpg', price: 29.99 , category: 'Men'},
  { _id: '8', name: 'T shirt', image: 'https://i.pinimg.com/236x/f7/48/1b/f7481b8c2ea24f26b152185f3838ac30.jpg', price: 19.99 , category: 'Men'},

  //women

  { _id: '9', name: 'Blouse', image: 'https://i.pinimg.com/236x/09/73/54/0973547653e7f1433c86a335d6f912e4.jpg', price: 59.99 , category: 'Women' },
  { _id: '10', name: 'Blouse', image: 'https://i.pinimg.com/236x/f8/80/da/f880da7277e7aa58845236a70c39e74d.jpg', price: 39.99, category: 'Women'},
  { _id: '11', name: 'Blouse', image: 'https://i.pinimg.com/236x/50/e2/f0/50e2f02d9762b4d18f8c2766239013a3.jpg', price: 29.99, category: 'Women' },
  { _id: '12', name: 'Blouse', image: 'https://i.pinimg.com/236x/03/dd/90/03dd90e9921b0c684789349790753a44.jpg', price: 19.99 , category: 'Women'},
  { _id: '13', name: 'Blouse', image: 'https://i.pinimg.com/236x/fa/1f/c4/fa1fc46e95a93d87da2fa6b032786ce8.jpg', price: 59.99 , category: 'Women'},
  { _id: '14', name: 'Casual', image: 'https://i.pinimg.com/236x/5e/c1/31/5ec1319a140007d2c5728610914a98aa.jpg', price: 39.99 , category: 'Women'},
  { _id: '15', name: 'Office', image: 'https://i.pinimg.com/236x/83/46/b5/8346b5241011bb9b5a0456c48a38a144.jpg', price: 29.99 , category: 'Women'},
  { _id: '16', name: 'T shirt', image: 'https://i.pinimg.com/236x/61/4b/8b/614b8b2c0935e4c12053d12d6ed9ef0f.jpg', price: 19.99 , category: 'Women'},

  { _id: '17', name: 'T shirt', image: 'https://i.pinimg.com/236x/49/20/30/49203020f819c741e9e4fcce06e290a6.jpg', price: 59.99 , category: 'Women'},
  { _id: '18', name: 'Baggiee', image: 'https://i.pinimg.com/236x/b0/17/59/b017591e44346688253b51172ed51a08.jpg', price: 39.99 , category: 'Women'},
  { _id: '19', name: 'Casual', image: 'https://i.pinimg.com/236x/56/c7/ee/56c7ee7bbc74acadce33e401d301870f.jpg', price: 29.99, category: 'Women' },
  { _id: '20', name: 'Unisex', image: 'https://i.pinimg.com/236x/24/0c/95/240c95cc145d42271573e3a7a9283a0d.jpg', price: 19.99 , category: 'Women'},
  { _id: '21', name: 'Handloom', image: 'https://i.pinimg.com/236x/1f/43/cb/1f43cbfaad377f7abfbd01912f8837ed.jpg', price: 59.99 , category: 'Women'},
  { _id: '22', name: 'T shirt', image: 'https://i.pinimg.com/236x/92/8e/2a/928e2a8f5fbc797b5af6517b49e3ab52.jpg', price: 39.99 , category: 'Women'},
  { _id: '23', name: 'T shirt', image: 'https://i.pinimg.com/236x/3c/74/b8/3c74b8f2a55afa6a46b38a64d144b1c0.jpg', price: 29.99 , category: 'Women'},
  { _id: '24', name: 'T shirt', image: 'https://i.pinimg.com/236x/9c/ad/b8/9cadb8b099a257e390ea5fdbbe8116bf.jpg', price: 19.99 , category: 'Women'},
  // Add more products here
];

const App = () => {
  const [query, setQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  return (
    <Router>
      <Header query={query} setQuery={setQuery} />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Welcome addToCart={addToCart} />} />
            <Route path="/home" element={<Home products={products} query={query} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
