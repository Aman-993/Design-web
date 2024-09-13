import React from 'react';
import Navbar from './components/Navbar';
 import Header from './components/Header';
 import FreshDrops from './components/Fresh';
 import WhatsApp from './components/Whatsapp';
import Assure from './components/Assure';
import Categories from './components/Categories';
import VCall from './components/Vid';
import BestSellers from './components/BestSellers';
import Brands from './components/Brands';
import Bests from './components/Bests';
import Stores from './components/Stores';
import Insta from './components/Insta';
import Email from './components/Email';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <FreshDrops/>
      <WhatsApp/>
      <Assure/>
      <Categories />
      <VCall/>
      <BestSellers />
      <Brands/>
      <Bests/>
      <Stores/>
      <Insta/>
      <Email/>  
      <Footer /> 
    </div>
  );
}

export default App;
