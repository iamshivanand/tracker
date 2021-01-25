import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";

function CreateIssue() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 290,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [label, setLabel] = React.useState("");
  const handleChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <div className="create-issue-main">
      <div className="issue-form">
        <div className="form-heading">
          <h2>Create-Issue</h2>
        </div>
        <div>
          <TextField
            id="Title"
            label="Title"
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

        <FormControl className={classes.formControl}>
          <InputLabel id="select-label">Labels</InputLabel>
          <Select
            labelId="select-label"
            id="label"
            value={label}
            onChange={handleChange}
          >
            <MenuItem value="Bug">Bug</MenuItem>
            <MenuItem value="in-progress">In-Progress</MenuItem>
            <MenuItem value="high-priority">High-Progress</MenuItem>
          </Select>
        </FormControl>
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
        <div className="create-issue-submit">
          <Button
            variant="contained"
            color="secondary"
            className="create-project-button"
          >
            Create Issue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateIssue;
