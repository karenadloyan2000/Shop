import { useState } from 'react'
import styles from './styles.module.css'
const FilterCatalog = ()=>{
    const  [max,setMax] = useState(1000);
    const  [min,setMin] = useState(2500)
    return <>
        <div className={`${styles.FilterCatalog}`}>
            <div className={`${styles.filterHeader}`}>
                <h2>Фильтр</h2>
            </div>
            <div className={`${styles.filterPrice}`}>
                <div className={`${styles.filterText}`}>
                    <p>Price</p>
                    <button>Reset</button>
                </div>
                <div className={`${styles.filterInput}`}>
                    <input type="text" value={1} max={100} placeholder='' />
                    <span>-</span>
                    <input type="text" value={1} max={100} placeholder='' />
                </div>
                <div className={`${styles.Reange}`}>
                    <div className={`${styles.progress}`}></div>
                    <input type="range"max={1000} min={0}    value={min} onChange={(e=>setMin(e.target.value))}  className={`${styles.rangeInput} ${styles.reangeInputMin}`} />
                    <input type="range"max={10000}  min={0}  value={max} onChange={(e=>setMax(e.target.value))}  className={`${styles.rangeInput} ${styles.reangeInputMax}`} />
                </div>
            </div>
        </div>
    </>
}
export default FilterCatalog