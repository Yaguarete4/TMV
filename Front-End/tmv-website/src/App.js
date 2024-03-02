//import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductsPage } from './components/pages/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
