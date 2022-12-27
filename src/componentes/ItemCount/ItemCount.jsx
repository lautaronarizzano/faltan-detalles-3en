import { useState } from 'react'
import ButtonsCartOrCatalogue from '../ButtonsCartOrCatalogue.jsx/ButtonsCartOrCatalogue'
import './ItemCount.css'

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    const [count, setCount] = useState(initial)

    //creo funcion para sumar cantidad
    const addQuantity = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    //creo funcion para restar cantidad
    const subtractQuantity = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    //creo funcion para ejecutar añadir al carrito
    const handleOnAdd = () =>{
        onAdd(count)
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