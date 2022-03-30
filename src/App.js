import './App.css';
import Header from './Home/header/Header';
import Main from './Home/mainHome/Main';
import ListTravelFetch from './fetch/ListTravel/ListTravelFetch';
import Users from './fetch/users/Users';
import EeuuFetch from './fetch/eeuu/EeuuFetch';
import ItalyFetch from './fetch/italy/ItalyFetch';
import Footer from './Home/footer/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';




function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path='/inicio'  element={<Main/>}/>
            <Route path='/italia'  element={<ItalyFetch/>}/>
            <Route path='/eeuu'  element={<EeuuFetch/>}/>
            <Route path='/planearviaje'  element={<ListTravelFetch/>}/>
            <Route path='/registro'  element={<Users/>}/>
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
