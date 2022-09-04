import { FOOT_TEXT, PAGE_ONE_TITLE } from '../constants/appLabel'
import './style.css';


const ProductList = ({requestData, loading, handleCheck,  onHandleDeleteItems}:any) => {

  return (
    <>
        <div className="content-box">
            <div className="content-box__top-items">
                <div className="content-box__column">
                    <div className="right-item">
                        <h2 className="page-title">
                            {PAGE_ONE_TITLE}
                        </h2>
                    </div>
                    <div className="left-items">
                        <button className="right-btn">ADD</button>
                        <button className="left-btn" onClick={onHandleDeleteItems}>MASS DELETE</button>
                    </div>
                </div>
            </div>
            <div className="content-box__bottom-items">
                {requestData?.map((obj:any, index:any) => ( 
                    <div className="custom-card" key={index}>
                        <div className="check-box__item">
                           <input 
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
            <div className="content-box__foot-items">
                <div className="footer-item">
                    <span>{FOOT_TEXT}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductList