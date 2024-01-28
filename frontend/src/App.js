import React from 'react';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AppScreen from './screens/AppScreen';
import WebsiteScreen from './screens/WebsiteScreen';
import SingleWebsite from './screens/SingleWebsite';
import SIngleApp from './screens/SingleApp';
import PortfolioScreen from './screens/PortfolioScreen';

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className='App'>      
      <main>
        <Routes>
          <Route path='/' Component={ HomeScreen } />
          <Route path='/apps' Component={ AppScreen } />
          <Route path='/apps/:id' Component={ SIngleApp } />          
          <Route path='/websites' Component={ WebsiteScreen } />          
          <Route path='/websites/:id' Component={ SingleWebsite } />
          <Route path='/portfolio' Component={ PortfolioScreen } />                  
        </Routes>
      </main>
      {/* FOOTER */}
      <Footer />
      </div>    
    </BrowserRouter>
  );
}

export default App;
