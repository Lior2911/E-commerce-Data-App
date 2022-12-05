import { useEffect, createContext, useState } from "react";
import {getProduct} from "../services/product-fetch";

export const productContext = createContext();

function ProductProvider({ children }){
  const [product, setProduct] = useState([]);
  useEffect(() => {getProduct().then((res) =>setProduct(res.data));
  }, []);
  return(
    <>
    <productContext.Provider value={{ product, setProduct}}>
      {children}
    </productContext.Provider>
    </>
  )
}


export default ProductProvider 