import StudentData from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await StudentData.find();

    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSingleStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const singleStudent = await StudentData.findById(id);

    res.status(200).json(singleStudent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const studentData = req.body;
  const newStudent = new StudentData(studentData);

  try {
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  const studentId = req.params.id;

  try {
    await StudentData.findByIdAndRemove(studentId).exec();

    res.send("Successfully Deleted!");
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    await StudentData.findByIdAndUpdate(id, data);

    res.status(200).json({
      success: true,
      message: "Password Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
