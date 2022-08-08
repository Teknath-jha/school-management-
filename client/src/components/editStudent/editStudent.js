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

const EditStudent = ( {id} ) => {
  console.log(id);

  const classes = useStyles();
  const data = axios.get(`http://localhost:5000/students/${id}`);
  console.log(data);

  const [studentData, setStudentData] = useState({
    regNo: data.regNo,
    studentName: data.studentName,
    grade: data.grade,
    section: data.section,
  });

  const updateStudent = async () => {
    console.log(studentData);
    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .patch("http://localhost:5000/students", studentData, config)
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <>
      <h2>Edit Student </h2>
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

        <Button variant="contained" color="primary" onClick={updateStudent}>
          Update
        </Button>
      </form>
    </>
  );
};

export default EditStudent;
