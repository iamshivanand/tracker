import React from "react";

import Button from "@material-ui/core/Button";
function Tracker() {
  return (
    <>
      <Button variant="contained" color="primary">
        + Create Project
      </Button>
      <div className="tracker"></div>
    </>
  );
}

export default Tracker;
