import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { db } from "../firebase";

function IssueTable() {

  const [issue,setIssue]=useState([]);

  useEffect(()=>{
    db.collection("issues")
      .get()
      .then((snapshot) => {
        const issues=[];
        snapshot.forEach((item) =>{
          const data=item.data();
          issues.push(data);
        });
        setIssue(issues);
      })
      .catch((error) =>{
        console.log(error);
      })
  },[]);

  
   
  const columns = [
    { title: "Issue No", field: "id" },
    { title: "Title", field: "title" },
    { title: "Description", field: "description" },
    
    { title: "CreatedAt", field: "timestamp.seconds" },
    { title: "Labels", field: "label" },
    { title: "Author", field: "author" },
  ];
  return (
    <div className="bug-table">
      <MaterialTable
        title="Bugs"
        data={issue}
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
