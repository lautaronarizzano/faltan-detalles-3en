import { useCartContext } from "../../Context/CartContext";
import "./CartItem.css";

const CartItem = ({ product }) => {

  const { deleteProduct } = useCartContext()


  return (
    <tr className="itemCart">
      <th>
        <img src={product.img} alt="" className="cartItemImg" />
      </th>
      <th className="nameCart">{product.nombre}</th>
      <th>
        <div>
          <input type="number" value={ product.cant } className="cantidad" />
        </div>
      </th>
      <th className="precioCart">$ {product.precio * product.cant}</th>
      <th>
        <button onClick={() => deleteProduct(product)}>eliminar</button>
      </th>
    </tr>
  );
};

export default CartItem;
