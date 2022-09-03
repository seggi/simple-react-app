import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList"
import { getProductList } from "../redux/actions";
import { RootState } from "../redux/reducers";

const  ProductListContainer = () => {
    const dispatch = useDispatch();
    const [requestData, setRequestData] = useState();
    const {data: {records}, error, loading}= useSelector((state: RootState ) =>state.getProductList);
    
   
    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])


    return (
        <>
            <ProductList requestData={records} />
           
        </>
    )
	
}




export default ProductListContainer;
