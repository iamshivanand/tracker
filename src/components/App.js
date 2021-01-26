import React  from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Home,
  CreateProject,
  ProjectDetail,
  CreateIssue,
  IssueTable,
  Page404,
} from "./";


function App(props) {
  const details = props.details;
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} details={details} />;
            }}
          />
          <Route path="/create-project" component={CreateProject} />
          <Route path="/issue-table" component={IssueTable} />
          <Route path="/create-issue" component={CreateIssue} />
          <Route path="/project-details" component={ProjectDetail} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  // console.log("mapStateToProps", state.project);
  return {
    details: state.project,
  };
}
export default connect(mapStateToProps)(App);
