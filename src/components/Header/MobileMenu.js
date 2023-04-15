import styles from './style.module.css'
import { useState } from 'react';
import Category from './Category'
const MobileMneu = () =>{
    const [cat, setCat] = useState('close');
    const toggle = () =>{
       if(cat == 'close'){
           setCat('open')
       }else{
           setCat('close')
       }
    }
    return <>
    <div className={`${styles.MobileMneu} none`}>
                <div className='container flex space-between align-center'>
                    <div className={`${styles.MobileMenuButton} flex flex-column`} ><img onClick={e=>toggle()} src="images/logo/submenu.svg" alt="" /><span>Каталог</span></div>
                    <ul className={`flex space-between align-center max-width-320 w-full`}>
                        <li className='list-none'>
                            <a  className={`flex flex-column justify-center align-center`}><img src="images/logo/wishlistmobile.svg" alt="" />Избранное <p className='none'>1</p></a>
                        </li>
                        <li className='list-none'>
                            <a href=""className={`flex flex-column justify-center align-center`}><img src="images/logo/ordermobile.svg" alt="" />Заказы <p className='none'>1</p></a>
                        </li>
                        <li className='list-none'>
                            <a href=""className={`flex flex-column justify-center align-center`}><img src="images/logo/cardmobile.svg" alt="" />Корзина <p className='none'>1</p></a>
                        </li>
                        <a href=""><img src="images/logo/avatarmobile.svg" alt="" /></a>
                    </ul> 
                </div>  
           </div>
           <Category onCategory = {cat}></Category>   
           </> 
}   
export default MobileMneu