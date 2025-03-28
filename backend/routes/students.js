const express = require("express");
const { body, validationResult } = require("express-validator");
const {getStudents , addSheets, updateStudent, deleteStudent} = require("../controllers/studentController");

const router = express.Router();

router.get("/", getStudents);

router.post("/", [
    body("name") .isString() .notEmpty() .withMessage("Name is required") ,
    body("course") .isString() .notEmpty() .withMessage("course is required")
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty() ) return res.status(400) .jason({errors:
errors.array()  });
addStudents(req, res);
});
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;