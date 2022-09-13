import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import axios from "./axios";
import { useEffect, useState } from 'react';
function App() {

  const [cards,setCards] = useState([]);

  useEffect(() => {
    axios.get("/tinder/cards")
    .then(res => {
      setCards(res.data);
    });
    
  }, []);

  // console.log(cards);

  return (
    <div className="">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
