import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList"
import { getProductList } from "../redux/actions";
import { RootState } from "../redux/reducers";

const  ProductListContainer: FC = () => {
    const dispatch = useDispatch();
    const {data, error, loading}= useSelector((state: RootState ) =>state.getProductList);
    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])
    return (
        <>
            <ProductList />
        </>
    )
}

export default ProductListContainer;