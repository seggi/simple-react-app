import {  ReactElement } from "react";
import ProductList from "../components/ProductList";

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
        element: <ProductList/>,
      },
]

export default routes;