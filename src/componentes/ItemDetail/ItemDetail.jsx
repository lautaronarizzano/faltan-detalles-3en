import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {

    const { addCart } = useCartContext()

//creo funcion para agregar al carrito con la cantidad
    const onAdd = (cant) => {

        addCart( { ...product, cant } )

    }

    return (
        <div className='itemDetailContenedor'>
            <div className='itemDetail'>
                <div className='img-container'>
                    <img src={product.img} alt={product.name}  className='imgD'/>
                </div>
                <div className='info'>
                    <h3>{product.name}</h3>
                    <h3>{product.category}</h3>
                    <p>{product.info}</p>
                    <h4>precio: ${product.price}</h4>
                    <ItemCount
                    stock={product.stock}
                    initial={1}
                    onAdd={onAdd}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail