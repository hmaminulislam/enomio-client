import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/footer/Footer';
import Headers from '../common/headers/Headers';

const Main = () => {
    return (
        <>
            <Headers />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;