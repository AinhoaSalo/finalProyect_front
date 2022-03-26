import './App.css';
import Header from './Home/header/Header';
import DescriptionPage from './Home/mainHome/DescriptionPage';
import DestinationsToTravel from './Home/mainHome/DestinationsToTravel';
import Footer from './Home/footer/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import PlanningList from './Home/mainHome/PlanningList';



function App() {
  return (
    <>
        <Router>
          <Header/>
          <DescriptionPage/>
          <DestinationsToTravel/>
          <PlanningList/>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
