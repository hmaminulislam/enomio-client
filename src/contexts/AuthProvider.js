import React, { createContext, useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [cart, setCart] = useState(false)
    const usersInfo = {
        cart,
        setCart
    }
    return (
        <AuthContext.Provider value={usersInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;