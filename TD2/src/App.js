import logo from './logo.svg';
import './App.css';
import Star from './composants/Star'
import { render } from '@testing-library/react';


function App() {
    return(
    <>
      <p style={{margin : "10px", fontSize : "40px"}}>Donnez votre opinion: </p>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
    );
}

export default App;
