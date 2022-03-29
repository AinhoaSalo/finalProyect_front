import './App.css';
import Header from './Home/header/Header';
import Main from './Home/mainHome/Main';
import ListTrip from './routes/listTrip/ListTrip';
import Users from './routes/users/Users';
import Footer from './Home/footer/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';




function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route exact path='/'  element={<Main/>}/>
            <Route path='/planearviaje'  element={<ListTrip/>}/>
            <Route path='/registro'  element={<Users/>}/>
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
