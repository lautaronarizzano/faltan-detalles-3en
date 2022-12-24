import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import { Cart } from '../../Cart/Cart'
import FormOrder from '../../FormOrder/FormOrder'
import './CartContainer.css'

const CartContainer = () => {

    const [ loading, setLoading ] = useState(true)

    const { cartList } = useCartContext()
    
    useEffect(() => {
        setTimeout(() =>{
            setLoading(false)

        }, 1500)
    })


    return (
        <main className={loading? 'loadingCart':'cartContainer'}>
        {loading ?
                <h2 className='loading'>loading...</h2>
                : cartList.length == 0?
                <div className='cart-vacio'>
                    <h2>No se encuentran productos en el carrito.</h2>
                    <Link to='/'>
                    <h3>Click aqui para volver al menu</h3>
                    </Link>
                </div>
                :
                <section className='section-cart'>
                    <div>
                    <Cart />
                    </div>
                    <div>
                        <FormOrder />
                    </div>
                </section>

            }


        </main>
    )
}

export default CartContainer