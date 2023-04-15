import SpecialLeft from './SpecialLeft'
import SpecialRight from './SpecialRight'
const Special = () =>{
    return <div className={`container flex flex-column`}>
        <h2>Special offers</h2>
        <div className={`flex w-full space-between align-center  flex-wrap`}>
          <SpecialLeft></SpecialLeft>
          <SpecialRight></SpecialRight>  
        </div>
    </div>  
}
export default Special