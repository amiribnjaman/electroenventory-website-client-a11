import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Auth/Login/Login';
import NavBar from './components/Shared/NavBar/NavBar'
import Signup from './components/Auth/Signup/Signup';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
