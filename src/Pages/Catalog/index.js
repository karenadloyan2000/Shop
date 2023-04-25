import { Link } from "react-router-dom"
import styles from "./style.module.css"
import FilterCatalog from "../../components/Catalog/FilterCatalog"
import ResultFilter from "../../components/Catalog/ResultFilter"
import MobileFilterCatalog from "../../components/Catalog/MobileFilterCatalog"
const Catalog = ()=>{
    return <>
        <div className={`${styles.catalogMain} container`}>
            <MobileFilterCatalog></MobileFilterCatalog>
            <div className={`${styles.CategoryHeader}`}> 
                <Link to="">Главная</Link>
                <span> &#x276D; </span>
                <Link to="">Каталог</Link>
                <span>&#x276D;</span>
                <span>Молоко, сыр, яйцо</span>
            </div>
            <h2>Молоко, сыр, яйцо</h2>
            <div className={`${styles.catalogContent}`}>
                <FilterCatalog></FilterCatalog>
                <ResultFilter></ResultFilter>
            </div>
        </div>
    </>
}
export default Catalog