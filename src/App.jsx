import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import BazarReducer from './compentes/BazarReducer';
import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from "./compentes/Home";
import Order from "./compentes/Order";
import Layout from "./compentes/Layout";
import Contact from "./compentes/Contact";
import About from "./compentes/About";
import CartTab from "./compentes/CartTab";
import Menu from "./compentes/Menu";

const store = configureStore({
    reducer:{
        bazar: BazarReducer
    }
})
function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} />
                    <Route path="/Layoute" element={<Layout/>} />
                    <Route index element={<Home/>} />
                    <Route path="/:slug" element={<Order/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/cart" element={<CartTab/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
export default App
// import React from 'react'
// import Accueil from './test'

// function App() {
//   return (
//    <Accueil/>
//   )
// }

// export default App