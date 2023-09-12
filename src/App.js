import './App.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';
import Guide from './pages/Guide';
import Login from './pages/Login';
import Ticket from './pages/Ticket';
import Profile from './pages/Profile';
import LeftoverTicket from './pages/LeftoverTicket';
import Map from './pages/Map';
import Rental from './pages/Rental';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;


function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/guide' element={<Guide/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/leftoverticket' element={<LeftoverTicket/>}/>
        <Route path='/rental' element={<Rental/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
