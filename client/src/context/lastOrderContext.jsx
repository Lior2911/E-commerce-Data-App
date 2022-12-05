import { useEffect, createContext, useState } from "react";
import {getLastOrder} from "../services/lastOrder-fetch";

export const lastOrderContext = createContext();

export function LastOrderProvider({ children }){
  const [lastOrder, setLastOrder] = useState([]);
  useEffect(() => {getLastOrder().then((res) =>setLastOrder(res.data));
  }, []);
  return(
    <>
    <lastOrderContext.Provider value={{ lastOrder, setLastOrder}}>
      {children}
    </lastOrderContext.Provider>
    </>
  )
}

