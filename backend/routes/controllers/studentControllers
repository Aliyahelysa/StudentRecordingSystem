const { v4: uuidv4 } = require("uuid");
let students = [];

const getStudents = (req, res) => res.json(students);

const addStudents = (req, res) => {
    const { name, course } = req.body;
    students.push(newStudent);
    res.status(201).jason (Student);
};

const deleteStudent = (req, res) => {
    students = students.filter(s => s.id !== req.params.id);
    res.status(200).jason({message: "Student deleted" });
    };

    module.experts = { getStudents, addStudent, updateStudent, deleteStudent};
