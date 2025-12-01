import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from  './landing_page/signup/SignUp'
import SupportPage from './landing_page/support/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import Login from  './landing_page/login/Login'
import 'react-toastify/dist/ReactToastify.css';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<AboutPage/>} />
                   <Route path='/product' element={<ProductPage/>} />
                      <Route path='/pricing' element={<PricingPage/>} />
                         <Route path='/support' element={<SupportPage/>} />
                            <Route path='/signup' element={<SignUp/>} />
                            <Route path='/login' element={<Login/>} />
                         <Route path='*' element={<NotFound/>} />
                       
                       
        </Routes>
        <Footer/>
    </BrowserRouter>
);



