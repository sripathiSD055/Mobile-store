import './App.css';
import TopNavbar from './components/common/Topnavbar';
import Navgation from './components/common/Navigation';
import Homepage from './pages/home';
import Footer from './components/common/Footer';

const  App = () => {
  return (
    <div>
      {/* <TopNavbar /> */}
      <Navgation />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
