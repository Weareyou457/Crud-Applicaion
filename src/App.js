import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./MAIN/Main";
import Product from './Admin/Product';
import ProductCreate from './Admin/ProductCreate';
import ProductEdit from './Admin/ProductEdit';



function App() {
  return (
    <div className="App">
      
     
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/products/create" element={<ProductCreate />} />
          <Route path="/admin/products/edit/:id" element={<ProductEdit />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
