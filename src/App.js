import './App.css';
import Header from './header/Header';
import DescriptionPage from './mainHome/DescriptionPage';
import DestinationsToTravel from './mainHome/DestinationsToTravel';
import Footer from './footer/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'



function App() {
  return (
    <>
        <Router>
          <Header/>
          <DescriptionPage/>
          <DestinationsToTravel/>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
