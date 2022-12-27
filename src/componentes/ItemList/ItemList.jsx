import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
    return (
//imprimo los productos dinamicamente
        <div className='products-container'>
            {products.map(product => <Item key={product.id} product={product} />)}
        </div>
    )
}

export default ItemList