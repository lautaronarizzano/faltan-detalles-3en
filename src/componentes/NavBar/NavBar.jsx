import { Link } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {

    const [ navLinks, setNavLinks ] = useState([])

//traigo las categorias para hacer dinamico el navbar
    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection( db, 'NavBarCategorys' )
    
        getDocs(queryCollection)
        .then(data => setNavLinks(data.docs.map(navLink =>({id: navLink.id, ...navLink.data() }))))
        .catch(err => console.log(err))
    }, [])
    return (
        <header className='header'>
            <nav className='headerNav'>
                <Link to='/'>
                    <h2 className='headerNavH2'>Burger Station</h2>
                </Link>
                <ul className='headerNavUl'>
                    {navLinks.map(navLink => <Link key={navLink.id} to={`/category/${navLink.categoryId}`}><li key={navLink.id} className='headerNavUlLi'>{navLink.name}</li></Link>)}
                </ul>
                <Link to='/cart' >
                    <CartWidget/>
                </Link>
            </nav>
        </header>
    )
}

export default NavBar