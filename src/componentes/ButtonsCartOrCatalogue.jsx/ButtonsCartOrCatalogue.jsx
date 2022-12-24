import { useState } from "react";
import { Link } from "react-router-dom";
import './ButtonsCartOrCatalogue.css'

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

    const handleInter=()=>{
        setInputType('input')
        handleOnAdd()
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
        </div>
    )
}

export default ButtonsCartOrCatalogue
