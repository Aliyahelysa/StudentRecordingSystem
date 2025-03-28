import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !course) {
            setMessage("Please fill in all fields.");
            return;
        }
         await addStudent(name, course);
         setName("");
         setCourse("");
         setMessage("Student added Successfully!") ;
      };

      return (
        <div> 
           <form onSubmit={handleSubmit}>
             <input type="text" placeholder="Student Name" value={name} 
      onChange={(e) => getName(e.target.value)} />
      <input type="text" placeholder="course" value={course} 
      onChange={(e) => setCourse(e.target.value)} />
              <button type="submit">Add Student</button>
              </form>
              <p>{message}</p>
              </div>

      );
};

export default StudentForm;