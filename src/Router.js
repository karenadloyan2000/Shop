import { Route, Routes, useRoutes } from "react-router-dom"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import MobileMneu from "./components/Header/MobileMenu"
import Home from "./Pages/Home"
// import ProductsPage from "./Pages/Products"
import Catalogs from "./Pages/Catalogs"
import Catalog from "./Pages/Catalog"
import { Layout } from "./components/layout"
export const MyRouter = () =>{
    // const routing = useRoutes([
    //     {
    //         path:"",
    //         element:[
    //             <Layout></Layout>
    //         ],
            
    //         children:[
    //             {path:'Shop',element:<Home></Home>},
    //             {path:'Shop/catalog',element:<Catalog></Catalog>},
    //             {path:'Shop/catalogs',element:<Catalogs></Catalogs>},
    //         ],
    //     },
    //     // {
    //     //     path:"*",
    //     //     element:<h1>Pages noth found</h1>
    //     // },
    // ]) 
    // return routing

    // <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>
    <Switch>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </Switch>
}
