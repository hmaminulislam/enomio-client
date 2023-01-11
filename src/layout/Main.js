import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../common/headers/Headers';

const Main = () => {
    return (
        <>
            <Headers />
            <Outlet />
        </>
    );
};

export default Main;