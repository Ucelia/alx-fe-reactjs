import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

const App =()=> {
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4 mb-20">Movie Database App</h1> 
      <SearchBar />
    </div>
  );
};

export default App
