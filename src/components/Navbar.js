import React from "react";
import { IconButton } from "@material-ui/core";
import BugReportIcon from "@material-ui/icons/BugReport";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="header_logo">
        <BugReportIcon fontSize="large" className="bug_Icon" />
        <h2 className="heading">Tracker</h2>
      </div>
      </Link>
      <IconButton>
        <AccountCircleIcon fontSize="large" className="profile_Icon" />
      </IconButton>
    </div>
  );
}

export default Header;
