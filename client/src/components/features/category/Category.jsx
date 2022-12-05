import React from "react";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { categoryContext } from "../../../context/categoryContext";

const Category = () => {
  const { category } = useContext(categoryContext);
  const categoryLength = category?.length;

  return (
    <div className=" pb-1 text-center">
      <h1 className="text-primary">{categoryLength}</h1>
      <span>quantity</span>
    </div>
  );
};
export default Category;
