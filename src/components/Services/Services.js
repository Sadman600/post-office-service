import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Services = () => {
    const [user] = useAuthState(auth);
    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            name: user?.displayName,
            email: user?.email,
            address: e.target.address.value,
            city: e.target.city.value
        };
        axios.post('https://safe-tundra-74673.herokuapp.com/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.result.insertedId) {
                    alert('Insert success')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder} className="login-container">
                <h4>Plz your info for services</h4>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" value={user?.displayName} placeholder="Enter your name" name="name" required readOnly />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" value={user?.email} placeholder="Enter Email" name="email" required disabled />

                <label htmlFor="address"><b>Address</b></label>
                <input type="text" placeholder="Enter address" name="address" autoComplete='off' required />

                <label htmlFor="city"><b>City</b></label>
                <input type="text" placeholder="Enter city" name="city" required />


                <button type="submit" className="login-btn">Checkout</button>
            </form>
        </div>
    );
};

export default Services;