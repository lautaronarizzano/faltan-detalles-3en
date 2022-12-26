import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import './ButtonsCartOrCatalogue.css'
import { ToastContainer, toast } from 'react-toastify';

const InputCount= ()=> {

    return (
        <div className="intercambiabilidad">
            <Link to='/cart' >
                <button  
                >Ir al Cart o Terminar compra</button>
            </Link>
            <Link to='/' >
                <button 
                >Seguir comprando</button>
            </Link>
        </div>
    )
}



const ButtonCount= ({handleInter})=> {

    return <button 
    onClick={handleInter}>
                Agregar Al carrito
            </button>

}

const ButtonsCartOrCatalogue = ({handleOnAdd}) => { 

    const [inputType, setInputType ] = useState('button')

    const {toastAdded} = useCartContext()

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
