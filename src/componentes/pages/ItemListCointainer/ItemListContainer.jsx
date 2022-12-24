import { useEffect, useState } from 'react'
import ItemList from '../../ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')

        const filtredQuery = id ? query(queryCollection, where('categoria', '==', id)) : queryCollection
        getDocs(filtredQuery)
            .then(data => setProducts(data.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))


    }, [id])

    return (
        <main className='main'>

            <section className='banner'>
                <img className='banner' src="https://sites.google.com/site/hamburguesasxd2018/_/rsrc/1534801794271/home/BANNER.JPG" alt="" />
            </section>

            <section className='container-burger'>\
                {
                    loading ?
                        <h2 className='loading'>loading...
                        </h2>
                        :
                        <ItemList products={products} />
                }
            </section>
        </main>
    )
}

export default ItemListContainer