import './App.css';
import TopNavbar from './components/common/Topnavbar';
import Navgation from './components/common/Navigation';
import Homepage from './pages/home';

const  App = () => {
  return (
    <div>
      <TopNavbar />
      <Navgation />
      <Homepage />
    </div>
  );
}

export default App;
