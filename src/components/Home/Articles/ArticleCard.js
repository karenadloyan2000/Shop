import styles from './style.module.css'
const ArticleCard = ({title}) =>{
    console.log(title)
    const props =''
    return <div className={`${styles.ArticleCard} max-width-376 w-full`}>
        <img src={props.photo} alt="" />
        <div className={`${styles.ArticleCardText}`}>
            <span>{props.date}</span>
            <h2>{props.title}</h2>
            <p>{props.subtext}</p>
            <button>More</button>
        </div>

    </div>
}
export default ArticleCard