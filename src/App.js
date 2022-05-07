
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Auth/Login/Login';
import NavBar from './components/Shared/NavBar/NavBar'
import Signup from './components/Auth/Signup/Signup';
import Footer from './components/Shared/Footer/Footer';
import InventorySpecificItemDetails from './components/Home/InventorySpecificItemDetails/InventorySpecificItemDetails';
import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute';
import AddInventory from './components/AddInventory/AddInventory';
import ManageInventories from './components/ManageInventories/ManageInventories';
import './App.css';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound'
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';
import 'react-toastify/dist/ReactToastify.min.css';
import Profile from './components/Profile/Profile';
import Blogs from './components/Blogs/Blogs'
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/inventory/:id' element={
          <ProtectedRoute>
            <InventorySpecificItemDetails />
          </ProtectedRoute>} />
        <Route path='/myitems' element={
          <ProtectedRoute>
            <MyItems />
          </ProtectedRoute>} />
        <Route path='/addinventory' element={
        <ProtectedRoute>
          <AddInventory />
        </ProtectedRoute>} />
        <Route path='/manageinventories' element={
        <ProtectedRoute>
          <ManageInventories />
        </ProtectedRoute>} />
        <Route path='/profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
