import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CounterProvider from '../Context/Counter/CounterProvider';

import App from '../Screens/App';
import CounterValueScreen from '../Screens/CounterValueScreen';
import CounterButtonScreen from '../Screens/CounterButtonScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <CounterProvider>
        <Routes >
          <Route path="/" element={<App />} />
          <Route path="/counter-value" element={<CounterValueScreen />} />
          <Route path="/counter-button" element={<CounterButtonScreen />} />
        </Routes>
      </CounterProvider>
    </BrowserRouter>
  )
}

export default Router;