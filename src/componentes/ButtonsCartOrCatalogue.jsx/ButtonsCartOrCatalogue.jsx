import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import './ButtonsCartOrCatalogue.css'

//creo funcion que permite elegir entre ir al carrito o ir al catalogo
const InputCount= ()=> {

    return (
        <div className="intercambiabilidad">
            <Link to='/cart' >
                <button  
                >Ir al Carrito</button>
            </Link>
            <Link to='/' >
                <button 
                >Seguir comprando</button>
            </Link>
        </div>
    )
}


//creo boton de agregar al carrito
const ButtonCount= ({handleInter})=> {

    return <button 
    onClick={handleInter}>
                Agregar Al carrito
            </button>

}

//creo funcion que agrega al carrito y cambia los botones
const ButtonsCartOrCatalogue = ({handleOnAdd}) => { 

    const [inputType, setInputType ] = useState('button')

//declaro toast de toastify
    const notify = () => toast.success('Se ha agregado el producto al carrito', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;

    const handleInter=()=>{
        setInputType('input')
        handleOnAdd()
        notify()
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
            <ToastContainer />
        </div>
    )
}

export default ButtonsCartOrCatalogue
