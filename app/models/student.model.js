module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("Student", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    passed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Student;
};
