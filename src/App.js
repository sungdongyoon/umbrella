import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';
import Guide from './pages/Guide';
import Login from './pages/Login';
import Ticket from './pages/Ticket';
import TicketMember from './pages/TicketMember';
import TicketGuest from './pages/TicketGuest';
import Profile from './pages/Profile';
import LeftoverTicket from './pages/LeftoverTicket';
import Map from './pages/Map';
import Faq from './pages/Faq';
import Rental from './pages/Rental';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHeader = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  return (
    <Container>
      <Header scrollPosition={scrollPosition} scrollHeader={scrollHeader}/>
      <Routes>
        <Route path='/' element={<Main scrollPosition={scrollPosition} scrollHeader={scrollHeader}/>}/>
        <Route path='/guide' element={<Guide/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='/member' element={<TicketMember/>}/>
        <Route path='/guest' element={<TicketGuest/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/leftoverticket' element={<LeftoverTicket/>}/>
        <Route path='/rental' element={<Rental/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
