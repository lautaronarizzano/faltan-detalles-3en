import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import './Receipt.css'

export const Receipt = ({cartList, dataForm, order}) => {

    const { totalPrice, clear } = useCartContext()

return (
<div className='receipt-container'>
    <h2>Gracias por su compra {dataForm.name}</h2>
    <h3 className='orden'>Su nuemero de orden es: {order}</h3>
    <h3 className='orden'>Nos contactaremos con usted en breves</h3>

    <p className='intro-order'>Usted a comprado: </p>{cartList.map(prod => {
        return(
            <div key={prod.id}>
                <p className='p-receipt'>{prod.name}  x{prod.cant}</p>
            </div>
        )
    })}
    <h3 className='totalPrice-receipt'>con un precio total de ${totalPrice()}</h3>
<Link onClick={clear} to='/' className='volver'>Volver</Link>
</div>
)
}

