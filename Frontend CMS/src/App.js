import React, { createContext, useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PlaceOrders from './components/pages/PlaceOrders';
import Service from './components/pages/Service';
import Footer from './components/pages/Footer';
import Login from './components/pages/Login';
import { SignUp } from './components/pages/SignUp';
import WareHouseLogin from './components/pages/WareHouseLogin';
import WareHouseSignUp from './components/pages/WareHouseSignUp';
import Track from './components/pages/Track';
import Contact from './components/pages/Contact';
import CalculateCost from './components/pages/CalculateCost';
import AdminDash from './components/pages/AdminDash';
import OperationsDash from './components/pages/OperationsDash';
import GroundDash from './components/pages/GroundDash';
import { OrderStatus } from './components/pages/OrdrerStatus';
import UploadDoc from './components/pages/UploadDoc';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialState,reducer } from './reducer/UseReducer';


export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <Router>
      <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Services" exact element={<Service/>}/>
      <Route path="/Contact" exact element={<Contact/>}/>
      <Route path="/User" exact element={<Login/>}/>
      <Route path="/SignUp" exact element={<SignUp/>}/>
      <Route path="/Warehouse" exact element={<WareHouseLogin/>}/>
      <Route path="/WSignup" exact element={<WareHouseSignUp/>}/>
      <Route path="/PlaceOrders" exact element={<PlaceOrders/>}/>
      <Route path="/Track" exact element={<Track/>}/>
      <Route path="/OrderPlacement" exact element={<CalculateCost/>}/>
      <Route path="/OrderStatus" exact element={<OrderStatus/>}/>
      <Route path="/UploadDoc" exact element={<UploadDoc/>}/>
    </Routes>
    <Routes>
        <Route path="/AdminDash" exact element={<AdminDash/>}/>
        <Route path="/OperationsDash" exact element={<OperationsDash/>}/>
        <Route path="/GroundDash" exact element={<GroundDash/>}/>
    </Routes>
    <Footer/>
    <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
  
    </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
