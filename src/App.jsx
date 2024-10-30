import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Explore from "./components/Explore";
import Classes from "./components/Classes";
import Join from "./components/Join";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Programs from './components/Programs';
import Login from './components/Login';
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import 'leaflet/dist/leaflet.css';
import Appointments from './components/Appointments'; 
import LoginTrainer from './components/LoginTrainer';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from "./components/UserProfile";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Explore onShowModal={showModal} />
                <Classes />
                <Join />
                <Pricing />
                <Reviews />
                
              </>
            } 
          />
          <Route path="/programs" element={<Programs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/appointments" element={<Appointments />} /> 
          <Route path="/logintrainer" element={<LoginTrainer />} />
          <Route path="/UserProfile" element={<UserProfile />} /> 
  
        </Routes>
        
        <Footer />
        <Modal isOpen={isModalOpen} content={modalContent} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
