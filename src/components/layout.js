import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import MobileMneu from "./Header/MobileMenu"
const Layout = ()=>{
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <MobileMneu></MobileMneu>
        </>
    )
}
export {Layout}