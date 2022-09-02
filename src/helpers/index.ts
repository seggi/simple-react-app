import {
    GET,
    POST,
    DELETE,
  } from "../constants/requestMethods";
  import apiRequest from "./apiRequest";

  
  export const saveData = async (url: any, data: any) => apiRequest(POST, url, data);
  export const fetchData = async (url: any) => apiRequest(GET,  url);
  export const deleteData = async ( url:string, data:any ) => apiRequest(DELETE, url, data);