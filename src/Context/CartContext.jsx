import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const [isClear, setIsClear] = useState(false)

    const handleIsClear = () => {
        setIsClear(true)
    }

    //agregar carrito y eliminar duplicados
    const addCart = (product) =>{
        const idx = cartList.findIndex(prod => prod.id == product.id)


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
        isClear && setCartList([])
    }

    

    const totalPrice = () => cartList.reduce((contador, producto) => contador += (producto.precio * producto.cant) , 0)

    const cantidadTotal = () => cartList.reduce((contador, producto) => contador += producto.cant, 0)

            
            return(
                <CartContext.Provider value={{
                    cartList,
                    isClear,
                    addCart,
                    deleteProduct,
                    clear,
                    totalPrice,
                    cantidadTotal,
                    handleIsClear
                }}>
            {children}
        </CartContext.Provider>
    )

}
    
    