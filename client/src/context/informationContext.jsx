import { useEffect, createContext, useState } from "react";
import {getInformation} from "../services/information-fetch";

export const informationContext = createContext();

function InformationProvider({ children }){
  const [information, setInformation] = useState([]);
  useEffect(() => {getInformation().then((res) =>setInformation(res.data));
  }, []);
  console.log(information)
  return(
    <>
    <informationContext.Provider value={{ information, setInformation}}>
      {children}
    </informationContext.Provider>
    
    </>
  )
}


export default InformationProvider 