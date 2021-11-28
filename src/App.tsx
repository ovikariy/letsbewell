import React from 'react';
import './assets/styles/App.css';
import NavBar from './components/navbar';
import { sections } from './modules/constants';
import FooterSection from './sections/footer';

function App() {
  return (
    <div className='app main-color' style={{ position: 'relative' }}>
      <NavBar />
      {sections.map((item) => item.component)}
      <FooterSection />
    </div>
  );
}

export default App;
