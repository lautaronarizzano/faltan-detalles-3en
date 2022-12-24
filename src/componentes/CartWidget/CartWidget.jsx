import React from 'react'
import cartIcon from '../../assets/img/cart.png'
import { useCartContext } from '../../Context/CartContext'
import './CartWidget.css'

const CartWidget = () => {

    const { cartList, cantidadTotal } = useCartContext()

    return (
        <div className='carrito'>
            <img src={cartIcon} alt="carrito" className='carritoImg'/>
            {
                cartList.length != 0 && 
            <div className='carritoDiv'>
            <span className='carritoSpan'>{cantidadTotal()}</span>
            </div>
            }
        </div>
    )
}

export default CartWidget
