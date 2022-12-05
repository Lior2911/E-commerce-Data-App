import { useEffect, createContext, useState } from "react";
import {getOrderTable} from "../services/orderTable-fetch";

export const orderTableContext = createContext();

function TableProvider({ children }){
  const [table, setTable] = useState([]);
  useEffect(() => {getOrderTable().then((res) =>setTable(res.data));
  }, []);
  return(
    <>
    <orderTableContext.Provider value={{table,setTable}}>
      {children}
    </orderTableContext.Provider>
    
    </>
  )
}


export default TableProvider 