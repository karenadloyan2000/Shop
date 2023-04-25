import { useRoutes } from "react-router-dom"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import MobileMneu from "./components/Header/MobileMenu"
import Home from "./Pages/Home"
// import ProductsPage from "./Pages/Products"
import Catalogs from "./Pages/Catalogs"
import Catalog from "./Pages/Catalog"
import { Layout } from "./components/layout"
export const MyRouter = () =>{
<Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
}
