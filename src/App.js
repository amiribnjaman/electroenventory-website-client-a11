import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Auth/Login/Login';
import NavBar from './components/Shared/NavBar/NavBar'
import Signup from './components/Auth/Signup/Signup';
import Footer from './components/Shared/Footer/Footer';
import InventorySpecificItemDetails from './components/Home/InventorySpecificItemDetails/InventorySpecificItemDetails';
import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/inventory/:id' element={
          <ProtectedRoute>
            <InventorySpecificItemDetails />
          </ProtectedRoute>} />
        <Route path='/additem' element={<AddItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
