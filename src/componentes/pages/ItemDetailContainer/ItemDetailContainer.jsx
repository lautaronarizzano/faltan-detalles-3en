import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const [ loading, setLoading ] = useState(true)

    const { productId } = useParams()    

    const timer = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }

        
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)
        getDoc(queryDoc)
        .then(resp => setProduct({id:resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => timer())

        
    }, [])

    

    return (
        <section>
            <div className={loading? 'itemDetail' : 'product'}>
                {loading?
                <h2 className='loading'>loading...</h2>
                :
            <ItemDetail product={product} />
            }
            </div>
        </section>
    )
}

export default ItemDetailContainer