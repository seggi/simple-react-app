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
                            id='delete-checkbox'
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
                            
                            {
                                obj?.product_length !== "" 
                                && obj?.product_height !== "" 
                                && obj?.product_width !==  "" ? (
                                    <span>{ obj?.product_height }x{ obj?.product_width }x{ obj?.product_length }</span>
                                ) : null
                            }
                            {
                                obj?.product_size !== "" ? <span>{obj?.product_size}(MB)</span> : null
                            }
                             {
                                obj?.product_weight !== "" ? <span>{obj?.product_weight} (KG)</span> : null
                            }
                            
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