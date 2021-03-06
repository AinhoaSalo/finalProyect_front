import './App.css';
import Header from './Home/header/Header';
import Main from './Home/mainHome/Main';
import ItalyFetch from './fetch/examplesEeuuItaly/italy/ItalyFetch';
import EeuuFetch from './fetch/examplesEeuuItaly/eeuu/EeuuFetch';
import ListTravelFetch from './fetch/ListTravel/ListTravelFetch/ListTravelFetch';
import CreateYourList from './fetch/ListTravel/createYourList/CreateYourList';
import UsersRegisterLogin from './fetch/users/registerLogin/UsersRegisterLogin';
import UserArea from './fetch/users/deleteput/UserArea';
import {Footer}from './Home/footer/Footer';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />}/>
            <Route path='/inicio'  element={<Main/>}/>
            <Route path='/italia'  element={<ItalyFetch/>}/>
            <Route path='/eeuu'  element={<EeuuFetch/>}/>
            <Route path='/listascreadas'  element={<ListTravelFetch/>}/>
            <Route path='/creatulista'  element={<CreateYourList/>}/>
            <Route path='/areapersonal'  element={<UserArea/>}/>
            <Route path='/registro'  element={<UsersRegisterLogin/>}/>
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </>
  );
}

export default App;
