import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductForm from './views/components/ProductForm';
import PersonForm from './views/components/PersonForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductForm />} />
          <Route path="/people" element={<PersonForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
