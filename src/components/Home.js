import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="create-project">
          <Button
            variant="contained"
            color="secondary"
            className="create-project-button"
            startIcon={<AddIcon />}
          >
            Create Project
          </Button>
        </div>
        <div className="project-container-wrapper">
          <div className="project-container">
            <div className="project-avatar">
              <img
                src="https://lh3.googleusercontent.com/proxy/0C8UjpjueFoNP5PTHOqZnsduWyRmvxP_xRE_OlXwSmST5rKjqC85jLlc6GzabcAX2Ckg-pgef7z_sf0zWMsyrDjHxLuQvQnGWwbkEs6S_fnn3RfRVyxieQ"
                alt="project-avatar"
              />
            </div>
            <div className="project-name">
              <h3>Hello Universe</h3>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
