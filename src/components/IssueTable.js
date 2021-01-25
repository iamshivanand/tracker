import React from "react";
import MaterialTable from "material-table";


function IssueTable() {
  const data = [
    {
      Title: "some title",
      Description: "Some description",
      Number: 1,
      CreatedAt: 1611389477297,
      Labels: ["bug", "In-progress", "High-priority"],
      Author: "Shiv",
    },
    {
      Title: "some title 2",
      Description: "Some description 2",
      Number: 2,
      CreatedAt: 1611389477298,
      Labels: ["bug", "In-progress", "High-priority"],
      Author: "Shiv1",
    },
    {
      Title: "some title 3",
      Description: "Some description 3",
      Number: 3,
      CreatedAt: 1611389477299,
      Labels: ["bug", "In-progress", "High-priority"],
      Author: "Shiv2",
    },
    {
      Title: "some title",
      Description: "Some description",
      Number: 4,
      CreatedAt: 1611389477297,
      Labels: ["bug", "In-progress", "High-priority"],
      Author: "Shiv",
    },
    {
      Title: "some title 2",
      Description: "Some description 2",
      Number: 5,
      CreatedAt: 1611389477298,
      Labels: ["bug", "In-progress", "High-priority"],
      Author: "Shiv1",
    },
    {
      Title: "some title 3",
      Description: "Some description 3",
      Number: 6,
      CreatedAt: 1611389477299,
      Labels: ["bug", "In-progress", "High-priority"],
      Author: "Shiv2",
    },
  ];
  const columns = [
    { title: "Title", field: "Title" },
    { title: "Description", field: "Description" },
    { title: "Number", field: "Number" },
    { title: "CreatedAt", field: "CreatedAt" },
    { title: "Labels", field: "Labels" },
    { title: "Author", field: "Author" },
  ];
  return (
    <div className="bug-table">
      <MaterialTable
        title="Bugs"
        data={data}
        columns={columns}
        options={{
          search: true,
          paging: false,
          selection: true,
        }}
      />
    </div>
  );
}

export default IssueTable;
