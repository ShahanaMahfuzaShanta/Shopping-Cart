import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css';
let newCart = [];
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    const [clearChossenProduct, setClearChoosenProduct] = useState([]);
    
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (product) =>{
        newCart = [...cart, product];
        setCart(newCart);
        //console.log(newCart);
        // const cart2 = newCart[Math.floor(Math.random()*newCart.length)];
        // setCart(cart2);
    }

    const [product, setProduct] = useState([]);
    
        const chooseOne = () => {
            console.log(newCart);
            
                const newProduct = newCart[Math.floor(Math.random() * newCart.length)];
                setProduct(newProduct);
                console.log(newProduct);
        }

    
    const chooseAgain = () => {
        const newChooseProduct = clearChossenProduct.remove();
        setClearChoosenProduct(newChooseProduct);
        console.log('clicked');
    }

    return (
        <div className='container'>
            <div className="products_container">
                {
                    products.map(product => <Product key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>

            <div className="cart_container">
                {
                    <Cart cart={cart}
                    key={product.id}
                    product={product}
                    chooseOne={chooseOne}
                   chooseAgain={chooseAgain}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;