import { useEffect, createContext, useState } from "react";
import {getCategory} from "../services/category-fetch";

export const categoryContext = createContext();

function CategoryProvider({ children }){
  const [category, setCategory] = useState([]);
  useEffect(() => {getCategory().then((res) =>setCategory(res.data));
  }, []);
  return(
    <>
    <categoryContext.Provider value={{ category, setCategory}}>
      {children}
    </categoryContext.Provider>
    
    </>
  )
}


export default CategoryProvider 