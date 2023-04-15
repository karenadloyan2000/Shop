import ArticleCard from "./ArticleCard"
const article = [
    {photo:"images/Article.png", title:"How to use masks and gloves in stores",subtext:"Detailed information about the modes of use of masks and gloves on the territory of LENTA stores. The information is updated every weekday.",date:"05.03.2021"},
    {photo:"images/Article.png", title:"How to use masks and gloves in stores",subtext:"Detailed information about the modes of use of masks and gloves on the territory of LENTA stores. The information is updated every weekday.",date:"05.03.2021"},
    {photo:"images/Article.png", title:"How to use masks and gloves in stores",subtext:"Detailed information about the modes of use of masks and gloves on the territory of LENTA stores. The information is updated every weekday.",date:"05.03.2021"},
    {photo:"images/Article.png", title:"How to use masks and gloves in stores",subtext:"Detailed information about the modes of use of masks and gloves on the territory of LENTA stores. The information is updated every weekday.",date:"05.03.2021"}
]
const ArticleList = () =>{
    article.map((elm,index)=>{
        return  <ArticleCard
            key={index}
            photo={elm.photo}
            title={elm.title}
            sybtext={elm.subtext}
            date={elm.date}
        ></ArticleCard>

    })
}
export default ArticleList