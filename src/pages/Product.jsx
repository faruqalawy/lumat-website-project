import React from 'react';

import Header from '../parts/Header';
import ProductList from '../parts/ProductList';
import Footer from '../parts/Footer';
import WhatsappButton from "../component/whatsappButton.jsx";

const Product = ({isSmallNavOpen, setIsSmallNavOpen}) => {
  return (
    <>
      <Header title="Produk" setIsSmallNavOpen={setIsSmallNavOpen} />

      <ProductList isSmallNavOpen={isSmallNavOpen} />

      <Footer />

      <WhatsappButton isSmallNavOpen={isSmallNavOpen} />
    </>
  )
}

export default Product