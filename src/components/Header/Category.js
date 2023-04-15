import styles from './style.module.css'
const Category = (onCategory)=>{
    let categor = ['Category1','Category2','Category3','Category4','Category5','Category6','Category7','Category8','Category9','Category10','Category11','Category12','Category13','Category14'] 
    if(onCategory.onCategory=='open'){
        return <>
            <div className={`${styles.category}`}>
                <ul className={`list-none flex  flex-wrap align-center container`}>
                    {
                        categor.map((elm,index)=>{
                            return  <li key={index} className={``}><a href="">{elm}</a></li>
                        })
                    }

                </ul>
            </div>
        </>
    }

}
export default Category