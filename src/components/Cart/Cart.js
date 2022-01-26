import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const user = <FontAwesomeIcon icon={faUserFriends} />;

    let total = 0;
    for(const product of cart) {
        total = total + product.salary;
    }
    return (
        <div>
            <div className='total-cart'>
                <h2>Project Cost</h2>
                <div className="total-div">
                    <h4>{user} Empolyee: {cart.length}</h4>
                    <h3>Total Amount: {total}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;