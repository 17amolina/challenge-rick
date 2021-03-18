import React from 'react';
import '../App.css'
import AppNav from '../components/AppNav';

const Home = () => {

    return (
      <>
        <AppNav />
        <div className="App">
          <img src="logo_rick.png" width="50%" height="50%" alt="logo" />
        </div>
      </>
    );
}

export default Home;