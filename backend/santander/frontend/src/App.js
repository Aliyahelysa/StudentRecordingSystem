import React, {useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./Components/StudentsForm";
import StudentList from "./Components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect (() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await
axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("error fetching students:", error);
    }
  };

  const addStudent = async (name, course) => {
    try {
      await axios.post("http://12.0.0.1:5000/api/students", { name, course });
      fetchStudents(); 
    } catch (error) {
      console.error("error adding student:", error);
    }
  };

  return (
    <div>
      <h1>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;