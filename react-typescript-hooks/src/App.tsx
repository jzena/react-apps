import React from 'react';
import './App.css';
import { AppProvider } from './context/context';
import Products from './components/Products';
import List from './components/List';

function App() {
  return (
    <AppProvider>
      <Products />
      <List />
    </AppProvider>
  );
}

export default App;
