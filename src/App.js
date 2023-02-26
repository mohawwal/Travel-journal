import React from 'react';
import './App.css';
import Body from './Body';
import Footer from './Footer';
import bodyData from './bodyData';


function App() {
  const places = bodyData.map(item => {
    return(
      <Body 
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div className='App'>
      <Footer />
      <section className='place'>
        {places}
      </section>
    </div>
  );
}

export default App;
