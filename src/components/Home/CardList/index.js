import Card from '../Card';
import styles from './style.module.css'
import { useState } from 'react';
const CardList = (props)=>{
    let product =  props.data
    // console.log(props.data)
    // const [data, setData] = useState([
    //     {images:"images/products.png",price:"44.50",name:"G/C Pancakes with meat weight, Russia"},
    //     {images:"images/products.png",price:"44.50",name:"G/C Pancakes with meat weight, Russia"},
    //     {images:"images/products.png",price:"44.50",name:"G/C Pancakes with meat weight, Russia"},
    //     {images:"images/products.png",price:"44.50",name:"G/C Pancakes with meat weight, Russia"},
    //     {images:"images/products.png",price:"44.50",name:"G/C Pancakes with meat weight, Russia"},
    //     {images:"images/products.png",price:"44.50",name:"G/C Pancakes with meat weight, Russia"},
    // ]);

    return <div className={`${styles.cards} flex space-between align-center w-full flex-wrap`}>
        {
            product.map((elm,index)=>{
                return <Card key={index} 
                    images={elm.images}
                    price={elm.price}
                    name={elm.name}
                ></Card>
            })
        }
    </div>
}
export default CardList