import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'

const NavBar = () => {

    const [ navLinks, setNavLinks ] = useState([])

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
                    {/* <Link to='/category/Hamburguesas'>
                        <li className='headerNavUlLi'>Hamburguesas</li>
                    </Link>
                    <Link to='/category/Bebidas'>
                        <li className='headerNavUlLi'>Bebidas</li>
                    </Link>
                    <Link to='/category/Complementos'>
                        <li className='headerNavUlLi'>Complementos</li>
                    </Link> */}
                    {navLinks.map(navLink => <Link to={`/category/${navLink.categoryId}`}><li className='headerNavUlLi'>{navLink.name}</li></Link>)}
                </ul>
                <Link to='/cart' >
                    <CartWidget/>
                </Link>
            </nav>
        </header>
    )
}

export default NavBar