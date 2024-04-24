//import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage'
import { Category } from './components/Category';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/productos/:itemId" element={<ProductDetailPage />} />
          <Route exact path="/" element={<div />} />
          <Route path="/*" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
