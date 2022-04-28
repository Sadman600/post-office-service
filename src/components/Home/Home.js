import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import User from '../User/User';
import './Home.css';

const Home = () => {
    const [user] = useAuthState(auth);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);

    const handelSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const imgurl = e.target.imgurl.value;
        const user = { name, email, imgurl };

        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            });
    }
    return (
        <section>
            <div>
                <form onSubmit={handelSubmit} className="container">
                    <h1>Input Your Info</h1>

                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter your name" name="name" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" required />

                    <label htmlFor="imgurl"><b>Photo Url</b></label>
                    <input type="text" placeholder="Enter img url" name="imgurl" required />

                    <button type="submit" className="btn">Add User</button>
                </form>
            </div>

            <div>
                <h1>{user?.displayName}</h1>
                <div className='users-container'>
                    {
                        users.map(user => <User key={user._id} user={user}></User>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;