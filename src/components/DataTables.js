import React from "react";
import Table from "react-bootstrap/Table";
import { array } from "prop-types";

const DataTables = (props) => {
  const { header = [], datasource = [] } = props;
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {header.map((item, idx) => (
            <th key={idx} className={item.className}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datasource.map((item, idx) => (
          <tr key={idx}>
            {header.map((header, idxheader) => (
              <td key={idxheader} className={header ? header?.className : ""}>
                {item[header.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTables;

DataTables.propTypes = {
  header: array.isRequired,
  datasource: array.isRequired,
};
