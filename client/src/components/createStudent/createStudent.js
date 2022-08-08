import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();

  const [studentData, setStudentData] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudent = async () => {
    console.log(studentData);
    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .post("http://localhost:5000/students", studentData, config)
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <>
      <h2>Create Student </h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Registeration No."
          variant="outlined"
          value={studentData.regNo}
          onChange={(event) => {
            setStudentData({ ...studentData, regNo: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={studentData.studentName}
          onChange={(event) => {
            setStudentData({ ...studentData, studentName: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Grade"
          variant="outlined"
          value={studentData.grade}
          onChange={(event) => {
            setStudentData({ ...studentData, grade: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          value={studentData.section}
          onChange={(event) => {
            setStudentData({ ...studentData, section: event.target.value });
          }}
        />

        <Button variant="contained" color="primary" onClick={createStudent}>
          Create
        </Button>
      </form>
    </>
  );
}
