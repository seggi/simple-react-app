import React, { useState } from 'react'
import AddProduct from '../components/AddProduct'

const AddProductContainer: React.FC = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [length, setLength] = useState();
  const [size, setSize] = useState();
  const [weight, setWeight] = useState();
  const [productTypeSelected, setProductTypeSelected] = useState();
 

  const handleWeightChange = (e: { target: { value: any; }; }) => setWeight(e.target.value);
  const handleWidthChange = (e: { target: { value: any; }; }) => setWidth(e.target.value);
  const handleHeightChange = (e: { target: { value: any; }; }) => setHeight(e.target.value);
  const handleLengthChange = (e: {target: {value: any;}; }) => setLength(e.target.value);
  const handleSizeChange = (e: {target: {value: any;}; }) => setSize(e.target.value);
  const handleSelectType = (e: {target: {value: any;}; }) => setProductTypeSelected(e.target.value);

  const  onHandleSaveItem = () => {
      
  }

  return (
    <>
      <AddProduct
         onHandleSaveItem={onHandleSaveItem}
         width={width}
         height={height} 
         length={length} 
         size={size} 
         weight={weight} 
         productTypeSelected={productTypeSelected}
         handleWeightChange={handleWeightChange}
         handleWidthChange={ handleWidthChange}
         handleHeightChange={handleHeightChange}
         handleLengthChange={handleLengthChange}
         handleSizeChange={handleSizeChange}
         handleSelectType={handleSelectType}
      />
    </>
  )
}

export default AddProductContainer