import React from "react";
import { useEmployeeContext } from "../utils/GlobalState";

function TableRows() {
  // eslint-disable-next-line
  const [state, _] = useEmployeeContext();

  return (
    <tbody>
      {state.map(user => (
        <tr>
          <th scope="row">{user.rowNumber}</th>
          <td>{user.name}</td>
          <td>{user.job}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableRows;
