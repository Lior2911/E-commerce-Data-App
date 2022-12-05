import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="d-flex text-white justify-content-between">
        <div>
          <h1>logo</h1>
        </div>
        <div>
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
};
export default Header;
