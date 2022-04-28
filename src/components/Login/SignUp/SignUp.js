import React from 'react';
import auth from '../../../firebase.init';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const handleCreateUserWithEmailAndPassword = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.psw.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handleCreateUserWithEmailAndPassword} className="login-container">
                <h1>Sign Up</h1>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter your name" name="name" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit" className="login-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;