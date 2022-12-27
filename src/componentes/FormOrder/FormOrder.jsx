import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import './FormOrder.css'
import { Link } from 'react-router-dom'

const FormOrder = () => {
    const { cartList, totalPrice, clear } = useCartContext()
    const [dataForm, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmation: ''
    })
    const [order, setOrder]=useState('')

    const addOrder = (e) => {
        e.preventDefault()
        let order = {
            buyer : dataForm,
            precio : totalPrice(),
            items :cartList.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.cant }))
        }
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        
        addDoc(queryCollection, order)
            .then(resp => setOrder(resp.id))
            .catch(err => console.log(err))
    }
    
    const handleOnChange = (e) => {
        setFormData({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    return (
    <>
            {order 
            ? <div>
                <h2>Gracias por su compra {dataForm.name}</h2>
                <h2>Su nuemero de orden es: {order}</h2>

                usted a comprado: {cartList.map(prod => {
                    return(
                        <div>
                            <p>{prod.nombre}</p>
                            <p>x{prod.cant}</p>
                        </div>
                    )
                })}
                <h3>con un precio total de {totalPrice()}</h3>
            <Link onClick={clear} to='/'>Volver</Link>
            </div>
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
                        <button>Terminar Compra</button>
                        :
                        <h4 className='error'>Los emails no coinciden o no son un email valido</h4>
                }
            </form>

        </div>}
    </>
    )
}

export default FormOrder