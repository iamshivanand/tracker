import React, { useEffect, useState } from "react";
import firebase from "firebase";
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
import { db } from "../firebase";

function CreateIssue() {

  const[index,setIndex]=useState("");
  
  
  useEffect(()=>{
    var indexissue=0;
    db.collection("issues")
    .get()
    .then((snapshot)=>{
      snapshot.forEach((item)=>{
        indexissue++;
      }); 
      setIndex(indexissue);
    })
    .catch((error)=> console.log(error));
  },[]);

console.log('index',index);


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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("issues")
      .add({
        title: title,
        description: description,
        author: author,
        label: label,
        id:index+1,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert("issue created succesfully 🏴‍☠️");
      })
      .catch((error) => {
        alert(error.message);
      });
    setTitle("");
    setDescription("");
    setLabel("");
    setAuthor("");
    setIndex(index+1);
  };

  return (
    <div className="create-issue-main">
      <div className="issue-form">
        <div className="form-heading">
          <h2>Create-Issue</h2>
        </div>
        <form onSubmit={handleSubmit}>
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
              required
              value={title}
              onChange={handleTitleChange}
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
              <MenuItem value="high-priority">High-Priority</MenuItem>
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
              required
              value={author}
              onChange={handleAuthorChange}
            />
          </div>

          <div className="create-issue-submit">
            <Button
              variant="contained"
              color="secondary"
              className="create-project-button"
              type="submit"
            >
              Create Issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateIssue;
