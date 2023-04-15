import styles from './style.module.css'
const SpecialRight = () =>{
    return <div className={`${styles.specialRight} max-width-584 w-full  flex space-between align-center`}>
        
        <div className={`${styles.SpecailText} flex flex-column max-width-258 w-full`}>
            <h2>Get a Severyanochka card</h2>
            <p>And get bonuses when buying in stores and on the website</p>
        </div>
        <img src="images/specialRight.png" alt="" />
    </div>
}
export default SpecialRight 