import React, {  useState } from 'react'
import { FOOT_TEXT, PAGE_ONE_TITLE } from '../constants/appLabel'
import { Checkbox } from './CheckBox';
import './style.css';
// import { Checkbox } from './CheckBox';

const ProductList = ({requestData}:any) => {
    const [data, setData] = useState(requestData);

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
                        <button className="left-btn">MASS DELETE</button>
                    </div>
                </div>
            </div>
            <div className="content-box__bottom-items">
                {data.map((obj:any, index:any) => ( 
                    <div className="custom-card">
                        <div className="check-box__item" key={index}>
                            <Checkbox
                                objData={obj}
                                onChange={(item:any) => {
                                    setData(data.map((d:any) => (d.order === item.order ? item : d)));
                                }}
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