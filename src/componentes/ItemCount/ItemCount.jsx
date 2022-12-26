import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import ButtonsCartOrCatalogue from '../ButtonsCartOrCatalogue.jsx/ButtonsCartOrCatalogue'
import './ItemCount.css'

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    const [count, setCount] = useState(initial)

    const {cartList} = useCartContext()

    const addQuantity = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const subtractQuantity = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () =>{
        onAdd(count)
        const cartStringify = JSON.stringify(cartList)

        localStorage.setItem( "cart", cartStringify )
    }
    return (
        <div className='card'>
            <div className="card-header">
                <label htmlFor="">cantidad a comprar: <input type="number" value={count}  disabled/></label>
            </div>
            <div className="card-body">
                <button onClick={subtractQuantity}>-</button>
                <button onClick={addQuantity}>+</button>
            </div>
            <div className="card-footer">
                <ButtonsCartOrCatalogue
                handleOnAdd={handleOnAdd}
                />
            </div>
        </div>
    )
}

export default ItemCount