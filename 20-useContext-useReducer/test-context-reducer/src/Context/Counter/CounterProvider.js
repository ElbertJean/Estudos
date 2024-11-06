import React, { useReducer } from 'react';
import { CounterContext } from './CounterContext';
import { CounterReducer } from './CounterReducer';

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(CounterReducer, 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
