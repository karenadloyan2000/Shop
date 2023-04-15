import styles from './style.module.css'
const Footer  = () =>{
    return <footer>
        <div className={`flex ${styles.footerContent} container space-between align-center flex-wrap`}>
            <img src="images/logo/FooterLogo.svg" alt="" />
            <ul className={`flex ${styles.footerMenu} flex-wrap list-none space-between align-center max-width-460 w-full`}>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Personal data processing policy</a></li>
            </ul>
            <div className={`flex space-between align-center max-width-100 w-full`}>
                <a href=""><img src="images/logo/instagram.svg" alt="" /></a>
                <a href=""><img src="images/logo/twitter.svg" alt="" /></a>
                <a href=""><img src="images/logo/FB.svg" alt="" /></a>
            </div>
            <a href='tel:8 800 777 33 33' className={`${styles.footerPhone} flex align-center`}><img src="images/logo/phone.svg" alt="" /> 8 800 777 33 33</a>
        </div>


    </footer>
}
export default Footer