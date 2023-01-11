import React, { useState } from 'react';
import Search from './search/Search';
import TopBar from './topBar/TopBar';
import Navbar from './navbar/Navbar';
import './headers.css'

const Headers = () => {
    const [mobileMenu, setMobileMenu] = useState('')
    return (
        <div>
            <TopBar />
            <Search setMobileMenu={setMobileMenu} />
            <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        </div>
    );
};

export default Headers;