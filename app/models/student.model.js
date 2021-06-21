module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    id: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    marks: {
      type: Sequelize.INTEGER,
    },
  });

  return Student;
};
