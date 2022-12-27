import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import './Receipt.css'

export const Receipt = ({cartList, dataForm, order}) => {

    const { totalPrice, clear } = useCartContext()

return (
    <div>
    <h2>Gracias por su compra {dataForm.name}</h2>
    <h2>Su nuemero de orden es: {order}</h2>

    usted a comprado: {cartList.map(prod => {
        return(
            <div>
                <p>{prod.name}  x{prod.cant}</p>
            </div>
        )
    })}
    <h3>con un precio total de ${totalPrice()}</h3>
<Link onClick={clear} to='/'>Volver</Link>
</div>
)
}

