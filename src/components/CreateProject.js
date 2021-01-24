import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class CreateProject extends Component {
  render() {
    return (
      <div className="create-project-page">
        <form noValidate autoComplete="off">
          <div>
            <TextField id="Name" label="Name" />
          </div>
          <div>
            <TextField id="Description" label="Description" />
          </div>
          <div>
            <TextField id="Author" label="Author" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
