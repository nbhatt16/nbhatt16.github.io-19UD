import React, { createContext, useContext, useReducer } from "react";

///////////

const EmployeeContext = createContext({
  rowNumber: 1,
  name: "",
  job: ""
});

/////////////

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          rowNumber: state.length + 1,
          name: action.name,
          job: action.job
        }
      ];

    case "sort by row number":
      function compareRowNum(a, b) {
        const idA = a.rowNumber;
        const idB = b.rowNumber;

        let comparison = 0;
        if (idA > idB) {
          comparison = 1;
        } else if (idA < idB) {
          comparison = -1;
        }
        return comparison;
      }
      return [...state.sort(compareRowNum)];

    case "sort by name":
      function compareName(a, b) {
        const idA = a.name;
        const idB = b.name;

        let comparison = 0;
        if (idA > idB) {
          comparison = 1;
        } else if (idA < idB) {
          comparison = -1;
        }
        return comparison;
      }
      return [...state.sort(compareName)];

    case "sort by job":
      console.log(state);

      function compareJob(a, b) {
        const idA = a.job;
        const idB = b.job;

        let comparison = 0;
        if (idA > idB) {
          comparison = 1;
        } else if (idA < idB) {
          comparison = -1;
        }
        return comparison;
      }
      return [...state.sort(compareJob)];

    default:
      return state;
  }
}

////////////

const { Provider } = EmployeeContext;

function EmployeeProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

////////////

function useEmployeeContext() {
  return useContext(EmployeeContext);
}

export { EmployeeProvider, useEmployeeContext };
