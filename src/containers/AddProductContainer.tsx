import React, { useEffect, useState } from 'react'
import AddProduct from '../components/AddProduct'

const AddProductContainer: React.FC = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [productTypeSelected, setProductTypeSelected] = useState();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productSKU, setProductSKU] = useState('');
  const [inputFieldError, setInputFieldError] = useState('');
 

  const handleWeightChange = (e: { target: { value: any; }; }) => setWeight(e.target.value);
  const handleWidthChange = (e: { target: { value: any; }; }) => setWidth(e.target.value);
  const handleHeightChange = (e: { target: { value: any; }; }) => setHeight(e.target.value);
  const handleLengthChange = (e: {target: {value: any;}; }) => setLength(e.target.value);
  const handleSizeChange = (e: {target: {value: any;}; }) => setSize(e.target.value);
  const handleSelectType = (e: {target: {value: any;}; }) => setProductTypeSelected(e.target.value);
  const handleChangePrice = (e: {target: {value: any;}; }) => setProductPrice(e.target.value);
  const handleChangeProductName = (e: {target: {value: any;}; }) => setProductName(e.target.value);
  const handleChangeProductSKU = (e: {target: {value: any;}; }) => setProductSKU(e.target.value);

  useEffect(() => {
    if (productSKU !== "" || height !== "" 
      || length !== "" || size !== "" 
      || weight !== "" || productName !== "" 
      || productPrice !== "") {
      setInputFieldError('')
    }
  }, [height, length, productName, productPrice, productSKU, size, weight])

  const  onHandleSaveItem = () => {
     if (!productSKU) {
        setInputFieldError("Please enter product SHU number")
     }
    if (!productName) {
      setInputFieldError("Please enter product name")
    }
    if (!productPrice) {
      setInputFieldError("Please enter product price")
   }
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
         productPrice={productPrice}
         productName={productName}
         productSKU={productSKU}
         handleChangePrice={handleChangePrice}
         handleChangeProductName={handleChangeProductName}
         handleChangeProductSKU={handleChangeProductSKU}
         inputFieldError={inputFieldError}
      />
    </>
  )
}

export default AddProductContainer