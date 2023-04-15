
import CardList from '../CardList'
import styles from './style.module.css'
const Stock = ({stocks,newProduct,bought}) =>{
            return <div  className={`${styles.stock} container flex flex-column`}>
            <div className={`flex flex-column`}>
                <div className={`${styles.stockHeader} w-full flex space-between align-center container`}>
                    <h2>Stock</h2>
                    <a href="" className={`flex space-between max-width-80 w-full align-center`}>All Stock <img src={'images/logo/arrow-right.svg'} alt="" /> </a>
                </div>
                <CardList data={stocks}></CardList>
            </div>
            <div className={`flex flex-column`}>
                <div className={`${styles.stockHeader} w-full flex space-between align-center container`}>
                    <h2>New</h2>
                    <a href="" className={`flex space-between max-width-80 w-full align-center`}>All Stock <img src={'images/logo/arrow-right.svg'} alt="" /> </a>
                </div>
                <CardList data={newProduct}></CardList>
            </div>
            <div className={`flex flex-column`}>
                <div className={`${styles.stockHeader} w-full flex space-between align-center container`}>
                    <h2>Bought before</h2>
                    <a href="" className={`flex space-between max-width-80 w-full align-center`}>All Stock <img src={'images/logo/arrow-right.svg'} alt="" /> </a>
                </div>
                <CardList data={bought}></CardList>
            </div> 
        </div>
}
export default Stock