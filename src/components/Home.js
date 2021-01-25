import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

function Home(props) {
  const title = props.details.title;
  const author = props.details.author;
  console.log("title:", title, "author:", author);

  return (
    <div className="home">
      <div className="create-project">
        <Link to="/create-project" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            className="create-project-button"
            startIcon={<AddIcon />}
          >
            Create Project
          </Button>
        </Link>
      </div>

      <div className="project-container-wrapper">
        <Link to="/project-details" style={{ textDecoration: "none" }}>
          <div className="project-container">
            <div className="project-avatar">
              <img
                src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
                alt="project-avatar"
              />
            </div>
            <div className="project-name">
              <div className="title">
                <h4>Title:{title}</h4>
              </div>
              <div className="author">
                <h4>Author:{author}</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
