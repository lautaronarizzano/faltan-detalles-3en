import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from '../../Loading/Loading'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const [ loading, setLoading ] = useState(true)

    const { productId } = useParams()    

//crear un timer para que dure el loading
    const timer = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }

//traigo el producto para el detalle
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'products', productId)
        getDoc(queryDoc)
        .then(resp => setProduct({id:resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => timer())

    }, [])

    

    return (
        <section>
            <div className={loading? 'detail-loading' : 'product'}>
                {loading?
                <Loading />
                :
            <ItemDetail product={product} />
            }
            </div>
        </section>
    )
}

export default ItemDetailContainer