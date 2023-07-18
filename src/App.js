import './App.css';
import TopNavbar from './components/common/Topnavbar';
import Navgation from './components/common/Navigation';
import Homepage from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';
import Footer from './components/common/Footer';
import pageNotFound from './pages/pageNotFound';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      {/* <TopNavbar /> */}
      <Navgation />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about/' element={<About />}>
          <Route path='cart' element={<Cart />}></Route>
        </Route>
        <Route path='*' element={<pageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
