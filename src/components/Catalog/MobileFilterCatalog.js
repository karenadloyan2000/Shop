import styles from './styles.module.css'
import { useState } from 'react';
const MobileFilterCatalog = ()=>{
    const  [max,setMax] = useState(1000);
    const  [min,setMin] = useState(2500)
    const [openF,setOpenf] = useState('flex')
    if(openF=="flex"){
        return <>
        <div className={`${styles.filterMobileCatalog}`}>
            <div className={`${styles.FilterCatalogMobile}`}>
                <div className={`${styles.filterHeader}`}>
                    <h2 onClick={(e=>setOpenf('none'))}>Фильтр</h2>
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
        </div>
    </>
    }

}
export default MobileFilterCatalog