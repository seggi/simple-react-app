import { ADD_BTN, DELETE_BTN, PAGE_ONE_TITLE } from '../constants/appLabel'
import Footer from './common/Footer';
import TopBar from './common/TopBar';
import './style.css';


const ProductList = ({requestData, loading, handleCheck,  onHandleDeleteItems}:any) => {

  return (
    <>
        <div className="content-box">
           <TopBar 
            fn={onHandleDeleteItems} 
            btnOne={ADD_BTN} 
            btnTwo={DELETE_BTN} 
            pageTitle={PAGE_ONE_TITLE}/>
            <div className="content-box__bottom-items">
                {requestData?.map((obj:any, index:any) => ( 
                    <div className="custom-card" key={index}>
                        <div className="check-box__item">
                           <input 
                            className='delete-checkbox'
                            type={'checkbox'}
                            name={"id"}
                            value={obj.id}
                            onChange={handleCheck}
                           />
                        </div>
                        <div className="item-description">
                            <span>{obj.sku}</span>
                            <span>{obj.name}</span>
                            <span>{obj.price}{obj.currency}</span>
                            <span>{obj.type_spec}: {obj.type_values}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default ProductList