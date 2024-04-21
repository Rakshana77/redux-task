// App.js

import { useDispatch } from 'react-redux';
import { setProducts } from './features/productsSlice';
import jsonData from './product.json';
import { useEffect } from 'react';
import ProductList from './features/ProductList';
import './App.css'; // Import CSS file for styling
import CartSlice from './features/cartSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the setProducts action with your JSON data
    dispatch(setProducts(jsonData.products));
  }, [dispatch])

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">My E-commerce App</h1>
      </header>
      <main className="main">
      
        <ProductList />
        <CartSlice />
      </main>
      <footer className="footer">
        <p>© 2024 My E-commerce App</p>
      </footer>
    </div>
  );
};

export default App;
