import React from 'react'
import { ADD_PRODUCT_TITLE, CANCEL_BTN, SAVE_BTN } from '../constants/appLabel'
import Footer from './common/Footer'
import TopBar from './common/TopBar'
import './style.css';

const AddProduct: React.FC = ({onHandleSaveItem}: any) => {
  return (
    <>
      <TopBar 
            fn={onHandleSaveItem} 
            btnThree={SAVE_BTN} 
            cancelBtn={CANCEL_BTN} 
            pageTitle={ADD_PRODUCT_TITLE}/>
      <div className="content-box__bottom-items">
          <form action="">
            <div className="content-box__row">
                <div className="content-box__left">
                   <div className="content-box__left-top">
                        <div className="item-box">
                            <div className="txt-item">
                              <span>SKU</span>
                            </div>
                            <div className="input-item">
                              <input  id="#sku" type="text" value="#sku" />
                            </div>
                          
                        </div>
                        <div className="item-box">
                            <div className="txt-item">
                              <span>Name</span>
                            </div>
                            <div className="input-item">
                              <input  id="#name" type="text" value="#sku" />
                            </div>
                        </div>
                        <div className="item-box">
                            <div className="txt-item">
                              <span>Price($)</span>
                            </div>
                            <div className="input-item">
                              <input  id="#price" type="text" value="#sku" />
                            </div>
                        </div>

                        <div className="item-box">
                            <div className="txt-item">
                              <span>Price($)</span>
                            </div>
                            <div className="input-item">
                              <input  id="#price" type="text" value="#sku" />
                            </div>
                        </div>
                        <div className="item-box">
                          <div className="txt-item">
                            <span id="txt-item-select">Type Switcher</span>
                          </div>
                          <div className="input-item-select">
                            <select id="productType">
                                <option selected>Type switcher</option>
                            </select>
                          </div>
                        </div>
                   </div>
                   <div className="content-box__left-bottom">
                      <div className="dynamic-form" 
                        style={{ 
                          width: "500px", 
                          background: "#eee", 
                          height: "200px", 
                          marginLeft: "10px", 
                          marginTop: "10px"}}>

                      </div>
                   </div>
                </div>
                <div className="content-box__right">
                   <div className="content-box__right-items">
                      <div className="item-box">
                          <div className="txt-item">
                            <span>Size (MB)</span>
                          </div>
                          <div className="input-item">
                            <input  id="#price" type="text" value="#sku" />
                          </div>
                      </div>
                      <span id="description-txt">*Product description</span>
                   </div>
                  
                   <div className="content-box__right-items">
                      <div className="item-box">
                          <div className="txt-item">
                            <span>Height (CM)</span>
                          </div>
                          <div className="input-item">
                            <input  id="#price" type="text" value="#sku" />
                          </div>
                      </div>

                      <div className="item-box">
                          <div className="txt-item">
                            <span>Width (CM)</span>
                          </div>
                          <div className="input-item">
                            <input  id="#price" type="text" value="#sku" />
                          </div>
                      </div>
                      <div className="item-box">
                          <div className="txt-item">
                            <span>length (CM)</span>
                          </div>
                          <div className="input-item">
                            <input  id="#price" type="text" value="#sku" />
                          </div>
                      </div>
                      <span id="description-txt">*Product description</span>
                   </div>

                   <div className="content-box__right-items">
                      <div className="item-box">
                          <div className="txt-item">
                            <span>Weight (KG)</span>
                          </div>
                          <div className="input-item">
                            <input  id="#price" type="text" value="#sku" />
                          </div>
                      </div>
                      <span id="description-txt">*Product description</span>
                   </div>

                </div>
            </div>
          </form>
      </div>
      <Footer/>
    </>
  )
}
export default AddProduct