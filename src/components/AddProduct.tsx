import React, { useEffect } from 'react'
import { ADD_PRODUCT_TITLE, CANCEL_BTN, SAVE_BTN } from '../constants/appLabel'
import Footer from './common/Footer'
import { FurnitureForm, IntellectualObject, MediaType } from './common/formTypes';
import TopBar from './common/TopBar'
import './style.css';

const AddProduct = ({
    onHandleSaveItem, 
    width, 
    height, 
    length, 
    size, 
    weight, 
    productTypeSelected,
    handleWeightChange,
    handleWidthChange,
    handleHeightChange,
    handleLengthChange,
    handleSizeChange,
    handleSelectType,
    productPrice,
    productName,
    productSKU,
    handleChangePrice,
    handleChangeProductName,
    handleChangeProductSKU,
    inputFieldError
  }: any) => {
  
  useEffect(()=>{
  },[productTypeSelected])

  const productFormTypes: any = [
    {id: "Furniture",  form: <FurnitureForm 
                          handleWidthChange={handleWidthChange}
                          handleHeightChange={ handleHeightChange}
                          handleLengthChange={handleLengthChange}
                          width={width}
                          height={height}
                          length={length}
                      />}, 
    {id: "DVD", form: <MediaType handleSizeChange={handleSizeChange} size={size}/>},
    {id: "Book", form: <IntellectualObject handleWeightChange={handleWeightChange} weight={weight}/>}
  ];

  
  return (
    <>
      <TopBar 
            fn={onHandleSaveItem} 
            btnThree={SAVE_BTN} 
            cancelBtn={CANCEL_BTN} 
            pageTitle={ADD_PRODUCT_TITLE}/>
       {
        inputFieldError !== '' ? (
        <div className="error-message">
          <span>{inputFieldError}</span>
        </div>) : null
       }
      <div className="content-box__bottom-items">
          <form action="" id="#product_form">
         
            <div className="content-box__row">
                <div className="content-box__left">
                   <div className="content-box__left-top">
                        <div className="item-box">
                            <div className="txt-item">
                              <span>SKU</span>
                            </div>
                            <div className="input-item">
                              <input  
                                id="#sku" 
                                type="text" 
                                value={productSKU} 
                                placeholder="#sku"
                                onChange={handleChangeProductSKU}
                                />
                            </div>
                          
                        </div>
                        <div className="item-box">
                            <div className="txt-item">
                              <span>Name</span>
                            </div>
                            <div className="input-item">
                              <input  
                                id="#name" type="text" 
                                value={productName} 
                                placeholder="#name" 
                                onChange={handleChangeProductName} 
                                />
                            </div>
                        </div>
                        <div className="item-box">
                            <div className="txt-item">
                              <span>Price($)</span>
                            </div>
                            <div className="input-item">
                              <input  
                                id="#price" 
                                type="text"
                                value={productPrice} 
                                placeholder="price"
                                onChange={handleChangePrice}
                                />
                            </div>
                        </div>
                        <div className="item-box">
                          <div className="txt-item">
                            <span id="txt-item-select">Type Switcher</span>
                          </div>
                          <div className="input-item-select">
                            <select 
                              id="#productType"
                              onChange={(e) => handleSelectType(e)}
                              >
                                <option value="" disabled selected>Type switcher</option>
                                <option value="Furniture">Furniture</option>
                                <option value="DVD">DVD</option>
                                <option value="Book">Book</option>
                            </select>
                          </div>
                        </div>
                   </div>
                   <div className="content-box__left-bottom">
                      <div className="dynamic-form" 
                        style={{ 
                          width: "550px", 
                          marginLeft: "10px", 
                          marginTop: "10px"}}>
                         { 
                           productFormTypes.map((item:any) => {
                             if (productTypeSelected === item.id) {
                               return item.form;
                             }
                             return <></>
                           })
                          }
                      </div>
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