import React from 'react'
import { useFetchCartsQuery } from '../../store/api/cart'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

function Cart() {
    const {isAuthenticated} = useAuth()
    const { data, isLoading } = useFetchCartsQuery(undefined, {
        skip: !isAuthenticated,  
      });
    const cartItems = data?.data.items
    

    if(!isAuthenticated) {
        return <div>
            Please <Link to="/login">login</Link> to view your cart.  <br />
        </div>
    }
  return <>
    <h1>Cart</h1>
    {isLoading && <p>Loading...</p>}
    {!isLoading && cartItems.length === 0 && <p>Your cart is empty</p>}

    <Link to="/checkout">Checkout</Link>
  </>
}

export default Cart