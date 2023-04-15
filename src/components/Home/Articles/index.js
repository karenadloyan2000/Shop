import ArticleList from "./ArticleList"
import styles from './style.module.css'
const Article = ()=>{
    return <div className="flex flex-column container">
        <div className={`${styles.articleHeader} w-full flex  space-between`}>
            <h2>Article</h2>
            <a href="" className="flex max-width-80 w-full space-between align-center">All Stock <img src="images/logo/arrow-right.svg" alt="" /></a>
        </div>
        <div className={`flex space-between align-center`}>
            <ArticleList></ArticleList>
        </div>
    </div>
}
export default Article