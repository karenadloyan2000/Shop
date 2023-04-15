import { Link, Outlet } from 'react-router-dom'
import Category from './Category'
import HeaderUser from './HeaderUser'
import styles from './style.module.css'
import { useState } from 'react'
const  Header = () =>{
     const [cat, setCat] = useState('close');
     const toggle = () =>{
        if(cat == 'close'){
            setCat('open')
        }else{
            setCat('close')
        }
     }
    return <header className={`${styles.header}`}>
      
        <div className={`headerContent container flex space-between align-center`}>
           <Link to={'/'}><img src={'images/logo/logo.svg'} alt=""  className={`dasketopLogo`} /></Link> 
            <img src={`images/logo/logoMobile.svg`} alt="" className={`mobileLogo none`} />
            <button onClick={e=>toggle()} className={`${styles.headerCatalog} headerCatalogMobile flex `}>
                <img className={`headerMenu`} src={'images/logo/menu.svg'}/>
                 <span className={`catecory-text`}>category</span> 
            </button>
            <span className={`max-width-375 w-full mobieSearch relative`}>
                <img src={'images/logo/search.svg'} className={`absolute ${styles.serachHeader}`} />
                <input type="text" className={`${styles.searchProduct}  max-width-374 w-full`} placeholder='Search product...' />
            </span>
            <div className={`${styles.headerButtons} headerButtonsMobile max-width-205 w-full flex space-between`} >
                <a href="" className={`flex flex-column align-center justify-center relative `}>
                    <img src={'images/logo/wishlist.svg'}/>
                    <p className={`${styles.countHeader}`}> 2</p>
                    Wishlist
                </a>
                <a href="" className={`flex flex-column align-center justify-center relative `}>
                    <img src={'images/logo/order.svg'}/>
                    <p className={`${styles.countHeader}`}> 2</p>
                    Order
                </a>
                <a href="" className={`flex flex-column align-center justify-center relative `}>
                    <img src={'images/logo/card.svg'}/>
                    <p className={`${styles.countHeader}`}> 2</p>
                    Cards
                </a>
            </div>
            <Category onCategory = {cat}></Category>
            <HeaderUser></HeaderUser>
        </div>
    </header>
}
export default Header