import styles from './style.module.css'
const Location = () =>{
    return <div className={`${styles.location} flex container flex-column`}>
        <h2>Our stores</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12193.927779240612!2d44.52464106918945!3d40.17608676312304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfa5daefc49%3A0x2c3665ccdee75952!2sRepublic%20Square!5e0!3m2!1sen!2s!4v1676711345249!5m2!1sen!2s" ></iframe>
    </div>
}
export default Location