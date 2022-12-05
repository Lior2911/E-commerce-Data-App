import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/productContext";
import StoresProvider from "./context/storesContext";
import DepartmentProvider from "./context/departmentContext";
import CategoryProvider from "./context/categoryContext";
import InformationProvider from "./context/informationContext";
import TableProvider from "./context/orderTableContext";
import { LastOrderProvider } from "./context/lastOrderContext";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LastOrderProvider>

    
    <TableProvider>
    <CategoryProvider>
    <DepartmentProvider>
    <StoresProvider>
    <ProductProvider>
    <InformationProvider>
      <App />
    </InformationProvider>
    </ProductProvider>
    </StoresProvider>
    </DepartmentProvider>
    </CategoryProvider>
    </TableProvider>
    </LastOrderProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
