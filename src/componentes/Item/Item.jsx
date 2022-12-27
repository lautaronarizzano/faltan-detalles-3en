import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
        <div
            className='card-container'
        >
            <div className="card" >
                <div className="card-header">
                    <h3 className='name-product'>{`${product.name} - ${product.category}`}</h3>
                </div>
                <div className="card-body">
                    <img src={product.img} alt={product.name} className='img' />
                </div>

                <div className="card-footer">
                <h4 className='price-product'>${product.price}</h4>
                    <Link to={`/item/${product.id}`}>
                        <button className="itemDetail-btn">
                            detalle del producto
                        </button>
                    </Link>
                </div>
            </div>


        </div>

    )
}

export default Item