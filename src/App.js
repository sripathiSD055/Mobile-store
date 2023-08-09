import './App.css';
import React from 'react';
import Navgation from './components/common/Navigation';
import Homepage from './pages/home';
import About from './pages/about';
import Categories from './pages/categories';
import Cart from './pages/cart';
import Footer from './components/common/Footer';
import PageNotFound from './pages/pageNotFound';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CategoriesDetails } from './components/categories/CategoriesDetails';
import NavBreadCrumbs from './components/common/BreadCrumbs';
import Product from './pages/Product';

const App = () => {
  let location = useLocation()
  return (
    <div>
      <Navgation />
      {location.pathname === '/' ? '' : <NavBreadCrumbs />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='categories/' element={<Categories />}>
          <Route path=':category' element={<CategoriesDetails />}></Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
