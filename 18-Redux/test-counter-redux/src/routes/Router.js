import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import CounterValue from "../screens/CounterValueScreen";
import CounterButton from "../screens/CounterButtonScreen";
import Login from "../screens/Login";
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route path="/counter-value" element={<PrivateRoute component={CounterValue} />} />
        <Route path="/counter-button" element={<PrivateRoute component={CounterButton} />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
