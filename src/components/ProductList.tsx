import React from 'react'
import { PAGE_ONE_TITLE } from '../constants/appLabel'
import './style.css';


const ProductList = () => {
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

            </div>
        </div>
    </>
  )
}

export default ProductList