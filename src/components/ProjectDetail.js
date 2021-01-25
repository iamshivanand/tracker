import React, { Component } from "react";
import IssueTable from "./IssueTable";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

class ProjectDetail extends Component {
  render() {
    return (
      <div className="project-details">
        <div className="create-issue-button">
          <Link to="/create-issue" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className="create-project-button"
              startIcon={<AddIcon />}
            >
              Create Issue
            </Button>
          </Link>
        </div>
        <IssueTable />
      </div>
    );
  }
}

export default ProjectDetail;
