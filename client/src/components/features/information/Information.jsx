import React from "react";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { informationContext } from "../../../context/informationContext";

const Information = () => {
  const { information } = useContext(informationContext);
  const informationLength = information?.length;

  return (
    <div className=" pb-1 text-center">
    <h1 className="text-primary">{informationLength}</h1>
    <span>quantity</span>
  </div>
  );
};
export default Information;
