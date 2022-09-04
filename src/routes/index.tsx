import {  ReactElement } from "react";
import AddProductContainer from "../containers/AddProductContainer";
import  ProductListContainer  from "../containers/ProductListContainer";

interface RouteElement {
    path: string;
    element: ReactElement;
    isProtected: boolean;
    key: string
}

interface Routes extends Array<RouteElement> {}


const routes: Routes = [
    {
        path: "/product-list",
        isProtected: false,
        key: "login",
        element: <ProductListContainer/>,
    },
    {
        path: "/add-product",
        isProtected: false,
        key: "login",
        element: <AddProductContainer/>,
      },
]

export default routes;