import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";

function CreateProject() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <div className="create-project-page">
      <div className="create-project-form">
        <div className="form-heading">
          <h2>Create-Project</h2>
        </div>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="Name"
              label="Name"
              className={classes.formControl}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              id="Description"
              label="Description"
              className={classes.formControl}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              id="Author"
              label="Author"
              className={classes.formControl}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaceIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="create-project-submit">
            <Button
              variant="contained"
              color="secondary"
              className="create-project-button"
            >
              Create Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
