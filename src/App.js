import './App.css';
import React from 'react';
import TopNavbar from './components/common/Topnavbar';
import Navgation from './components/common/Navigation';
import Homepage from './pages/home';
import About from './pages/about';
import Categories from './pages/categories';
import Cart from './pages/cart';
import Footer from './components/common/Footer';
import PageNotFound from './pages/pageNotFound';
import { Route, Routes } from 'react-router-dom';
import { CategoriesDetails } from './components/categories/CategoriesDetails';
const LazyHome = React.lazy(()=>import ('./pages/home'))
const App = () => {  
  return (
    <div>
      {/* <TopNavbar /> */}
      <Navgation />
      <Routes>
        
        <Route path='/' element={<React.Suspense><LazyHome /></React.Suspense>} />
        <Route element={<Categories />}>
          <Route path='categories/' >
            <Route path=':category' element={<CategoriesDetails />}></Route>
          </Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
