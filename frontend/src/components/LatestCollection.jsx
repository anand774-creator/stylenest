import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="my-10 px-4 sm:px-6 lg:px-8 bg-bg-primary text-text-primary">
      <div className="text-center py-8">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="max-w-2xl mx-auto text-sm md:text-base text-text-secondary leading-relaxed">
          Explore our newest arrivals, designed with style and quality in mind.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            // Pass colors or styling as props if needed
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
