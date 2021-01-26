import React, { useState } from "react";
import firebase from 'firebase';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import { db } from "../firebase";

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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("project")
      .add({
        name: name,
        description: description,
        author: author,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        alert("project is created succesfully🏁");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setDescription("");
    setAuthor("");
  };
  return (
    <div className="create-project-page">
      <div className="create-project-form">
        <div className="form-heading">
          <h2>Create-Project</h2>
        </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
              required
              value={name}
              onChange={handleNameChange}
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
              required
              value={description}
              onChange={handleDescriptionChange}
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
              required
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div className="create-project-submit">
            <Button
              type="submit"
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
