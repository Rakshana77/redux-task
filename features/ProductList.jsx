// src/ProductList.js

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const ProductList = () => {
  const products = useSelector(state => state.products.products); // Corrected selector
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
