import React from "react";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { departmentContext } from "../../../context/departmentContext";

const Department = () => {
  const { department } = useContext(departmentContext);
  const departmentLength = department?.length;

  return (
    <div className=" pb-1 text-center">
      <h1 className="text-primary">{departmentLength}</h1>
      <span>quantity</span>
    </div>
  );
};
export default Department;
