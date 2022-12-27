import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    //agregar carrito y eliminar duplicados
    const addCart = (product) =>{

        const idx =  cartList.findIndex(prod => prod.id == product.id)

        if (idx !== -1) {
            cartList[idx].cant += product.cant
            setCartList( [ ...cartList ] )
        } else{
            setCartList([...cartList, product])
        }

    }

    //eliminar producto
    const deleteProduct = (product) => {
        setCartList(cartList.filter(item => item.id !== product.id))
    }



    //vaciar carrito
    const clear = () =>{
        setCartList([])
    }

    
//calcular precio total
    const totalPrice = () => cartList.reduce((counter, producto) => counter += (producto.price * producto.cant) , 0)

//calcular cantidad total
    const cantidadTotal = () => cartList.reduce((counter, producto) => counter += producto.cant, 0)

            
            return(
                <CartContext.Provider value={{
                    cartList,
                    addCart,
                    deleteProduct,
                    clear,
                    totalPrice,
                    cantidadTotal,
                }}>
            {children}
        </CartContext.Provider>
    )

}
    
    