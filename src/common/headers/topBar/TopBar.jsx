import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const TopBar = () => {
    const {user, logOut} = useContext(AuthContext)
    //logOut Hanle
  const logOutHandle = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
    return (
        <>
        <div className='py-3 secondary-bg hidden md:block'>
            <div className="flex justify-between items-center px-5 md:px-10 lg:px-14">
                <div><h4 className='text-xs text-white'>Welcome to Enomio store message or remove it!</h4>
                </div>
                <div className='flex'>
                    <div className='flex items-center mr-8'>
                        <i className="fa-solid text-gray-300 fa-location-dot mr-1"></i>
                        <h4 className='text-xs text-white'>Contact</h4>
                    </div>
                    <div className='flex items-center mr-8'>
                        <i className="fa-solid text-gray-300 fa-circle-info mr-1"></i>
                        <h4 className='text-xs text-white'>Need help</h4>
                    </div>
                    {
                        user ? <button onClick={logOutHandle} className='btn btn-xs text-xs bg-red-500'>Log out</button> : <>
                            <div className='flex items-center'>
                                <i className="fa-solid text-gray-300 fa-user mr-1"></i>
                                <Link to="/login"><h4 className='text-xs text-white'>Login</h4></Link>
                                <span className='text-white px-1'>/</span>
                                <Link to="/register"><h4 className='text-xs text-white'>Register</h4></Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
        <hr />
        </>
    );
};

export default TopBar;