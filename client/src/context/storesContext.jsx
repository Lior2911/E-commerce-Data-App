import { useEffect, createContext, useState } from "react";
import {getStores} from "../services/stores-fetch";

export const storesContext = createContext();

function StoresProvider({ children }){
  const [stores, setStores] = useState([]);
  useEffect(() => {getStores().then((res) =>setStores(res.data));
  }, []);
  return(
    <>
    <storesContext.Provider value={{ stores, setStores}}>
      {children}
    </storesContext.Provider>
    
    </>
  )
}


export default StoresProvider 