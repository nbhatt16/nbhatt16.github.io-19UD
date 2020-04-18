import React from "react";
import "./App.css";
import Table from "./components/Table";
import { EmployeeProvider } from "./utils/GlobalState";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <EmployeeProvider>
        <Header />
        <Table />
      </EmployeeProvider>
    </div>
  );
}

export default App;
