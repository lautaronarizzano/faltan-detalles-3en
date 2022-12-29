import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Receipt } from '../Receipt/Receipt'
import './FormOrder.css'

const FormOrder = () => {

    const { cartList, totalPrice } = useCartContext()


    //creo estado para poner lso datos del formulario
    const [dataForm, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmation: ''
    })
    
    const [order, setOrder] = useState('')

//creo orden de pedido y la agrego
    const addOrder = (e) => {
        e.preventDefault()
        let order = {
            buyer : dataForm,
            precio : totalPrice(),
            items :cartList.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.cant }))
        }

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(resp => setOrder(resp.id))
            .catch(err => console.log(err))
    }

//creo ejecutador de funcion para agregar la data del formulario
    const handleOnChange = (e) => {
        setFormData({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    return (
    <section className='container-form'>
            {order ? 
            <Receipt cartList={cartList} dataForm={dataForm} order={order}/>
            : <div className='form-container'>
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
                    type="number"
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
                    dataForm.email == dataForm.emailConfirmation && dataForm.email.includes('@') ?
                        <button className='buy'>Terminar Compra</button>
                        :
                        <h4 className='error'>Los emails no coinciden o no son un email valido</h4>
                }
            </form>

        </div>}
    </section>
    )
}

export default FormOrder