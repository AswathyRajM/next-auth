module.exports = (app) => {
  const students = require("../controller/student.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", students.create);

  // Retrieve all students
  router.get("/", students.findAll);
  router.get("/ok", (req, res) => {
    res.send({ message: "good" });
  });

  // // Retrieve all published students
  // router.get("/published", students.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", students.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", students.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", students.delete);

  // // Delete all students
  // router.delete("/", students.deleteAll);

  app.use("/api/students", router);
};
