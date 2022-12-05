import Table from "react-bootstrap/Table";
import { orderTableContext } from "../../../context/orderTableContext";
import { useContext } from "react";

function OrderTable() {
  const { table } = useContext(orderTableContext);


  return (
    <div>
    <Table striped  hover responsive className="tabledata" >
      <thead>
        <tr>
          <th>orderNumber</th>
          <th>name</th>
          <th>address</th>
          <th>deliveryDate</th>
          <th>numOfItem</th>
          <th>sum</th>
        </tr>
      </thead>
      <tbody>
     
          {table?.map((item)=>{
            return(
              <tr>
                <td>{item?.orderNumber}</td>
                <td>{item?.name}</td>
                <td>{item?.address}</td>
                <td>{item?.deliveryDate}</td>
                <td>{item?.numOfItem}</td>
                <td>{item?.sum}</td>
             </tr>
            )
          })}
    
      </tbody>
    </Table>
    </div>
  );
}

export default OrderTable;
