import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Shared/NavBar/NavBar';
import Home from './components/Home/Home/Home';
import Footer from './/components/Shared/Footer/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
