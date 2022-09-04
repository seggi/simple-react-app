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

      </div>
      <Footer/>
    </>
  )
}
export default AddProduct