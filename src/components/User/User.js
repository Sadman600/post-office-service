import React from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';

const User = ({ user }) => {
    const { _id, name, email, imgurl } = user;
    const handleDeleteUser = id => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
    const navigate = useNavigate();

    return (
        <div className="card">
            <img src={imgurl} alt="John" style={{ width: "100%" }} />
            <h1>{name}</h1>
            <p className="title">CEO & Founder</p>
            <p>{email}</p>
            <p><button onClick={() => navigate('/service')} >Get Service</button></p>
            <p><button onClick={() => handleDeleteUser(_id)}>Delete</button></p>
        </div>
    );
};

export default User;