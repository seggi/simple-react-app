import axios from "axios";
const REACT_APP_URL_API  = "https://nankim.000webhostapp.com/";


const apiRequest = async (requestMethod: string, url: any, data: any = null) => {
  try {
   if (requestMethod === "GET") {
    const response = await axios.get(`${REACT_APP_URL_API}/${url}`);
    return response.data;
   }
   else if (requestMethod === "DELETE") {
      const response =  await axios.post(`${REACT_APP_URL_API}/${url}`,JSON.stringify(data));
      return response.data;
     
   } else {
    const response = await axios.post(`${REACT_APP_URL_API}/${url}`, JSON.stringify(data) );
    return response.data;
    
   }
  } catch (e) {
    console.log(e);
  }
    
};

export default apiRequest;