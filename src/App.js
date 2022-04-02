import './App.css';
import Header from './Home/header/Header';
import Main from './Home/mainHome/Main';
import ItalyFetch from './fetch/italy/ItalyFetch';
import EeuuFetch from './fetch/eeuu/EeuuFetch';
import ListTravelFetch from './fetch/ListTravel/ListTravelFetch/ListTravelFetch';
import CreateYourList from './fetch/ListTravel/createYourList/CreateYourList';
import Users from './fetch/users/Users';
import Footer from './Home/footer/Footer';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';




function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />}/>
            <Route path='/inicio'  element={<Main/>}/>
            <Route path='/italia'  element={<ItalyFetch/>}/>
            <Route path='/eeuu'  element={<EeuuFetch/>}/>
            <Route path='/listascreadas'  element={<ListTravelFetch/>}/>
            <Route path='/creatulista'  element={<CreateYourList/>}/>
            <Route path='/registro'  element={<Users/>}/>
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
