const REACT_APP_URL_API  = "https://nankim.000webhostapp.com/";
const contentType: {} = {'Content-type': 'application/json'  };

interface RequestOptions {
    method: string,
    body: any
    headers: any
}

const apiRequest = async (requestMethod: string, url: any, data: any = null) => {
  const requestOptions: RequestOptions = {
    method: requestMethod,
    body: JSON.stringify(data),
    headers: contentType,
  };

  try {
   if (requestMethod === "GET") {
    const response = await fetch(`${REACT_APP_URL_API}/${url}`);
    return response.json();
   }
   const response = await fetch(`${REACT_APP_URL_API}/${url}`, requestOptions);
   return response.json();

  } catch (e) {
    console.log(e);
  }
};

export default apiRequest;