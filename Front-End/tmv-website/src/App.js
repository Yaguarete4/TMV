//import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage'
import { Category } from './components/Category';
import { CartContextProvider } from './context/CartContextProvider';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path="/productos" element={<CartContextProvider />}>
            <Route path="" element={<ProductsPage />} />
            <Route path=":itemId" element={<ProductDetailPage />} />
          </Route>

          <Route exact path="/" element={<div />} />

          <Route path="/*" element={<CartContextProvider />} >
            <Route path='*' element={<Category />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
