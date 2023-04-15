import styles from './style.module.css'

const HeaderUser = ()=>{
    return <div className={`${styles.headerUser} flex max-width-147 mobileUserBlock w-full space-between align-center`}>
       <img src={'images/logo/avatar.svg'} />
       <span className={`userName`}>Алексей</span>
       <img src={'images/logo/header-arrow-drow.svg'}/> 
    </div>
}
export default HeaderUser