import React from "react";
import Header from "../../features/header/Header";
import Product from "../../features/product/Product";
import Stores from "../../features/stores/stores";
import Department from "../../features/department/Department";
import Category from "../../features/category/Category";
import Information from "../../features/information/Information";
import Diagram from "../../features/diagram/Diagram";
import OrderTable from "../../features/orderTable/OrderTable";
import LastOrder from "../../features/lastOrders/LastOrders";
import { Row, Col, Container } from "react-bootstrap";
import "./Dashboard.css";
const Dashbord = () => {
  return (
    <>
    <div className="container-fluid boxContainer ">
      
      <div className="row mb-5 headerRow">
        <div className="col-12">
          <Header/>
        </div>
      </div>

      <div className="row mb-5 justify-content-center collectionRow ">

        <div className="col-md-2  colCollection">
          <span>Department</span>
          <div>
            <Department/>
          </div>
        </div>

        <div className="col-md-2  colCollection">
        <span>Category</span>


          <div>
            <Category/>
          </div>
        </div>

        <div className="col-md-2  colCollection">
        <span>Information</span>

          <div>
            <Information/>
          </div>
        </div>

        <div className="col-md-2 colCollection">
        <span>Stores</span>

          <div>
            <Stores/>
          </div>
        </div>

        <div className="col-md-3 colCollection">
        <span>Product</span>
          
          <div>
            <Product/>
          </div>
        </div>

      </div>

      <div className="row mt-4 diagramRow" >
        <div className="col-12 bg-white">
          <Diagram/>
        </div>
      </div>

      <div className="row mt-4 tableRow">

        <div className="col-sm-12 col-md-5  circlesCol">
          <div className="circleData d-flex mt-4 mb-4 justify-content-between ">
          
            <div className="circle">
              
              <LastOrder/>
            </div>
            <div  className="circle2">
              <LastOrder/>
            </div>
          </div>
        </div>

        <div className="col-sm-12 bg-white mb-5  col-md-7 tableCol">
          <OrderTable/>
        </div>

      </div>

 
    </div>

    </>
  );
};
export default Dashbord;


