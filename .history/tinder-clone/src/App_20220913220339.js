import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import axios from "./axios";
function App() {
  return (
    <div className="">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
