import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesGrid, employeesData } from "../data/dummy";
import { Header } from "../component";

const Employees = () => {
  const pageSettings = { pageSize: 10 };
  const toolbarOptions = ["Search"];
  return (
    <div className="m-2 md:m-10 p-2 md:0-10 bg-white rounded-3x-l">
      <Header title="Employees" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        pageSettings={pageSettings}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Search,
            Toolbar, // add this
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
