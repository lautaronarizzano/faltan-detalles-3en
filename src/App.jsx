import NavBar from "./componentes/NavBar/Navbar";
import ItemListContainer from "./componentes/pages/ItemListCointainer/ItemListContainer";
import ItemDetailContainer from "./componentes/pages/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import CartContainer from "./componentes/pages/CartContainer/CartContainer";
import FormOrder from './componentes/FormOrder/FormOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
return (
    <BrowserRouter>
        <CartContextProvider>

        <NavBar />

        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/checkout' element={<FormOrder/>}/>
        </Routes>

        </CartContextProvider>

    </BrowserRouter>
);
}

export default App;
