import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

export const Cart = () => {

    const navegar = useNavigate()

    const { cartList, clear, totalPrice } = useCartContext()

    return (
        <div className='cart'>
            <table className="cartTable">
                <thead>
                    <tr>
                        <th>img</th>
                        <th>nombre</th>
                        <th>cantidad</th>
                        <th>precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(product => <CartItem key={product.id} product={product} cartList={cartList} stock={product.stock}/>)}
                </tbody>
            </table>

            <div className="cart-footer">
            <button onClick={clear}>Vaciar carrito</button>
                <h3>Precio Total: ${totalPrice()}</h3>
            </div>
            <button onClick={() => navegar('/checkout')} className='get-order'>Finalizar compra</button>
        </div>


    )
} 