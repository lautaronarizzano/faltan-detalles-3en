import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import './FormOrder.css'

const FormOrder = () => {

    const { cartList, clear, totalPrice, isClear, handleIsClear } = useCartContext()

    const [dataForm, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmation: ''
    })


    const addOrder = (e) => {

        e.preventDefault()

        const order = {}

        order.buyer = dataForm
        order.precio = totalPrice()
        order.items = cartList.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.cant }))

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')


        //agregar orden
        addDoc(queryCollection, order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            // .then(() =>  )
        // .then(() => clear())

        //actualizar
        // const queryDoc = doc(db, 'productos', )
    }
    const factura = () => {
        console.log('ola')
        return (
            <div>
                <h2>Gracias por su compra {dataForm.name}</h2>

                usted a comprado: {cartList.map(prod => {
                    <div>
                        <p>{prod.name}</p>
                        <p>x{prod.cant}</p>
                    </div>
                })}
                <h3>con un precio total de {totalPrice()}</h3>
            </div>
        )
    }


    const handleOnChange = (e) => {
        setFormData({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='form-container'>
            <h2>Ingrese sus datos para poder contactarnos</h2>
            <form onSubmit={addOrder} className='form' >
                <input
                    type="text"
                    onChange={handleOnChange}
                    name='name'
                    value={dataForm.name}
                    placeholder="ingrese su nombre"
                    required
                />
                <input
                    type="text"
                    onChange={handleOnChange}
                    name='phone'
                    value={dataForm.phone}
                    placeholder="ingrese su numero de telefono"
                    required
                />
                <input
                    type="text"
                    onChange={handleOnChange}
                    name='email'
                    value={dataForm.email}
                    placeholder="ingrese su email"
                    required
                />
                <input
                    type="text"
                    onChange={handleOnChange}
                    name='emailConfirmation'
                    value={dataForm.emailConfirmation}
                    placeholder="ingrese su email nuevamente"
                    required
                />
            {
                dataForm.email == dataForm.emailConfirmation && dataForm.email.includes('@')?
                <button>Terminar Compra</button>
                :
                <h4 className='error'>Los emails no coinciden o no son un email valido</h4>
            }
            {
                typeof dataForm.phone !== 'number'?
                <button>Terminar Compra</button>
                :
                <h4 className='error'>El numero agregado no es un numero</h4>
            }
            </form>


        </div>
    )
}

export default FormOrder