import React from "react";
import { IconButton } from "@material-ui/core";
import BugReportIcon from "@material-ui/icons/BugReport";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <BugReportIcon fontSize="large" className="bug_Icon" />
        <h2 className="heading">Issue Tracker</h2>
      </div>
      <IconButton>
        <AccountCircleIcon fontSize="large" className="profile_Icon" />
      </IconButton>
    </div>
  );
}

export default Header;
