import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/register';
import PrebuildSelect from './pages/prebuiltselect';
import Prebuilt from './pages/prebuilt';
import Home from './pages/home';
import Login from './pages/login';
import ProfileInfo from './pages/profileinfo';
import Custombuild from './pages/custombuild';
import reportWebVitals from './reportWebVitals';
import Ratinginfluencers from './pages/ratinginfluencers';
import Checkout from './pages/checkout';
import Cart from './pages/cart';
import OrderHistory from './pages/orderhistory';
import Ticket from './pages/ticket';
import Ratingusers from './pages/ratingusers';
import Rankingperipherals from './pages/rankingperipherals';
import Rankingpcs from './pages/rankingpcs';
import HistoriaExtraFP from './pages/HIstoriaExtraFP';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GrafDet from './components/GrafDet';
import CpuDet from './components/CpuDet';
import PlacaDet from './components/PlacaDet';
import RamDet from './components/RamDet';
import RefliqDet from './components/RefliqDet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='proyecto/' element={ <Home /> } />
        <Route path='proyecto/register' element={<Register />} />
        <Route path='proyecto/login' element={<Login />} />
        <Route path='proyecto/profileInfo' element={<ProfileInfo />} />
        <Route path='proyecto/prebuiltselect' element={<PrebuildSelect />} />
        <Route path='proyecto/prebuilt' element={<Prebuilt />} />
        <Route path='proyecto/custombuild' element={<Custombuild />} />
        <Route path='proyecto/cart' element={<Cart />} />
        <Route path='proyecto/checkout' element={<Checkout />} />
        <Route path='proyecto/orderHistory' element={<OrderHistory />} />
        <Route path='proyecto/ticket' element={<Ticket />} />
        <Route path='proyecto/ratingusers' element={<Ratingusers />} />
        <Route path='proyecto/ratinginfluencers' element={<Ratinginfluencers />} />
        <Route path='proyecto/rankingperipherals' element={<Rankingperipherals />} />
        <Route path='proyecto/rankingpcs' element={<Rankingpcs />} />
        <Route path='proyecto/passwordreset' element={<HistoriaExtraFP />} />
        <Route path='proyecto/grafdet' element={<GrafDet />} />
        <Route path='proyecto/cpudet' element={<CpuDet />} />
        <Route path='proyecto/placadet' element={<PlacaDet />} />
        <Route path='proyecto/ramdet' element={<RamDet />} />
        <Route path='proyecto/refliqdet' element={<RefliqDet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();