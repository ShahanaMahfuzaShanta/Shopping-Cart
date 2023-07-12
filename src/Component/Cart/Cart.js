import React from 'react';
import '../Cart/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {
    const {cart,chooseOne, chooseAgain} = props;

    return (
        <div className='cart'>
            <h2>Selected Bags:{cart.length} {cart.map((product) => (
                <p key={product.id}>{product.name} <button className='delete_button'><FontAwesomeIcon icon={faTrash} /></button></p>
            ))}</h2>
            <button onClick={() => chooseOne()}>Choose any one</button>
            {/* <h2>Selected Bags: {newCart.map((newProduct) => (
                <p key={product.id}>{product.name}</p>
            ))}</h2> */}
            <button className='btn_chooseAgain' onClick={chooseAgain}>Choose again</button>
        </div>
    );
};

export default Cart;