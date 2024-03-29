import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/footer/Footer';
import Headers from '../common/headers/Headers';

const Main = () => {
    return (
      <>
        <Headers />
        <div className=''>
          <Outlet />
        </div>
        <Footer />
      </>
    );
};

export default Main;