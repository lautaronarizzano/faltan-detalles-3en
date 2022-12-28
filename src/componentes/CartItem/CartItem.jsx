import { useCartContext } from "../../Context/CartContext";
import "./CartItem.css";

const CartItem = ({ product }) => {

  const { deleteProduct } = useCartContext()

  return (
    <tr className="itemCart">
      <th>
        <img src={product.img} alt="" className="cartItemImg" />
      </th>
      <th className="nameCart">{product.name}</th>
      <th>
        <div>
          <p>x{ product.cant }</p>
        </div>
      </th>
      <th className="precioCart">$ {product.price * product.cant}</th>
      <th>
        <button onClick={() => deleteProduct(product)}>eliminar</button>
      </th>
    </tr>
  );
};

export default CartItem;
