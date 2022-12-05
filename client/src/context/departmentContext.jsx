import { useEffect, createContext, useState } from "react";
import {getDepartment} from "../services/department-fetch";

export const departmentContext = createContext();

function DepartmentProvider({ children }){
  const [department, setDepartment] = useState([]);
  useEffect(() => {getDepartment().then((res) =>setDepartment(res.data));
  }, []);
  return(
    <>
    <departmentContext.Provider value={{ department, setDepartment}}>
      {children}
    </departmentContext.Provider>
    
    </>
  )
}


export default DepartmentProvider 