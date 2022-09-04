import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList"
import { getProductList } from "../redux/actions";
import { RootState } from "../redux/reducers";

const  ProductListContainer: React.FC =  ()  => {
    const dispatch = useDispatch();
    const [checkedL, setChecked]:any = useState([]);
    const {data, loading}= useSelector((state: RootState ) =>state.getProductList);

    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])

    const handleCheck = (event:any) => {
        const { name, value, checked } = event.target;
        var list:any = [...checkedL];
        if (checked) {
            list = [...checkedL, {[name]: value}];
        }else {
            list.splice(checkedL.indexOf(value), 1)
        }
        setChecked(list)
       }
    
    const onHandleDeleteItems = () => {}


    return (
        <>
            <ProductList 
                requestData={data?.records} 
                loading={loading}
                onHandleDeleteItems={onHandleDeleteItems}
                handleCheck={handleCheck}
                />
        </>
    )
	
}




export default ProductListContainer;
