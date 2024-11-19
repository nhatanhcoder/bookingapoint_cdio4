import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from './pages/Doctor';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import MyProfile from './pages/MyProfile';
import MyApointments from './pages/MyApointments';
import Apointment from './pages/Apointment';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/myapointments" element={<MyApointments/>}/>
        <Route path="/apointment/:docId" element={<Apointment/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
