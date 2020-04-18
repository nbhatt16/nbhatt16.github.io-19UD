import React, { useRef } from "react";
import { useEmployeeContext } from "../utils/GlobalState";
import TableRows from "./TableRows";

function Table() {
  // eslint-disable-next-line
  const [_, dispatch] = useEmployeeContext();

  const inputRef = useRef();
  const inputRefTwo = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
      job: inputRefTwo.current.value
    });
    inputRef.current.value = "";
    inputRefTwo.current.value = "";
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th
              onClick={() => dispatch({ type: "sort by row number" })}
              scope="col"
            >
              #
            </th>
            <th onClick={() => dispatch({ type: "sort by name" })} scope="col">
              Name
            </th>
            <th onClick={() => dispatch({ type: "sort by job" })} scope="col">
              Job
            </th>
          </tr>
        </thead>
        <TableRows />
      </table>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="form-control"
          name="name"
          placeholder="Enter Name Here"
        />
        <input
          ref={inputRefTwo}
          className="form-control"
          name="job"
          placeholder="Enter Job Title Here"
        />
        <button className="btn-success">Add</button>
      </form>
    </div>
  );
}

export default Table;
