
import styles from './style.module.css'
const Card = (props) =>{
   
    return <div className={`${styles.card} flex flex-column relative`}>
        <div className={`${styles.widhlist} flex justify-center align-center max-width-32 w-full`}>
            <img src={'images/logo/wishlistCard.svg'} alt="" />
        </div>
        <img src={props.images} alt="" />
        <div className={`${styles.cardRow} flex  flex-column`}>
            <div className={`flex flex-column`}>
                <p className={`${styles.productPrice}`}>{props.price}$</p>
            </div>
            <p>{props.name}</p>
            <div className={`${styles.star} flex max-width-96 space-between align-cneter w-full`}>
                <img src={'images/logo/star1.svg'} alt="" />
                <img src={'images/logo/star1.svg'} alt="" />
                <img src={'images/logo/star1.svg'} alt="" />
                <img src={'images/logo/star1.svg'} alt="" />
                <img src={'images/logo/star1.svg'} alt="" />
            </div>
            <a href="" className={`${styles.cardButton}`}>Add to cart</a>
        </div>
    </div>
}
export default Card