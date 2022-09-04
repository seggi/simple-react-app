import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList"
import { getProductList } from "../redux/actions";
import { RootState } from "../redux/reducers";

const  ProductListContainer: React.FC =  ()  => {
    const dispatch = useDispatch();
    const {data, loading}= useSelector((state: RootState ) =>state.getProductList);
    
    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])

    return (
        <>
            <ProductList requestData={data?.records} loading={loading}/>
        </>
    )
	
}




export default ProductListContainer;
