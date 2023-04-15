

import styles from './style.module.css'
const Media = () =>{
    return <div className={styles.main}>
        <div className={`${styles.mainContent} container flex space-around flex-wrap align-center`}>
            <img className={`max-width-335 w-full`} src={'images/product.PNG'} alt="" />
            <h2>Orders free for 1000$</h2>
        </div>
    </div>
}
export default Media