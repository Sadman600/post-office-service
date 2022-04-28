import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth);
        navigate('/');
    }
    return (
        <div className="topnav">
            <Link className="active" to="/">Home</Link>
            <Link to='/service'>Service</Link>
            <Link to='/order'>Order</Link>

            {
                user ? '' : <Link to='/signup'>Sign Up</Link>
            }
            {
                user ? <button onClick={handleLogOut} type="button" className="w-25 mx-auto">Log Out</button>
                    :
                    <Link to='/login'>Login</Link>
            }
        </div>
    );
};

export default Header;