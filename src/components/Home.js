import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { db } from "../firebase";
function Home(props) {
  const [project, setProject] = useState([]);
  useEffect(() => {
    console.log("mounted");
    db.collection("project")
      .get()
      .then((snapshot) => {
        const projects = [];
        snapshot.forEach((item) => {
          const data = item.data();
          projects.push(data);
        });
        setProject(projects);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("projects", project);

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
      {project.map((item) => {
        return (
          
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
                    <h4>Title:{item.name}</h4>
                  </div>
                  <div className="author">
                    <h4>Author:{item.author}</h4>
                  </div>
                </div>
              </div>
            </Link>
          
        )
      })}
      </div>
    </div>
  );
}

export default Home;
