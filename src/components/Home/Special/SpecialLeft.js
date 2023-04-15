import styles from './style.module.css'
const SpecialLeft = ()=>{
    return <div className={`${styles.specialLeft} max-width-584 w-full  flex space-between align-center`}>
        
        <div className={`${styles.SpecailText} flex flex-column max-width-258 w-full`}>
            <h2>Buy promotional items</h2>
            <p>And get double bonuses</p>
        </div>
        <img src="images/specialLeft.png" alt="" />
    </div>
}
export default SpecialLeft