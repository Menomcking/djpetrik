import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Experiences from './components/Experiences';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

class App extends React.Component{
    render(){
      return <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/experience' element={<Experiences />} />
            <Route path='appointment' element={<Appointment />} />
          </Routes>
        </main>
        <footer>
           <Footer />
        </footer>

        </div>
      }
    }

export default App;
