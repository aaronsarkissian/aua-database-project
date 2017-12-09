module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    student_id: { type: DataTypes.CHAR(12), primaryKey: true, allowNull: false },
    first_name: { type: DataTypes.CHAR(25), allowNull: false },
    last_name: { type: DataTypes.CHAR(25), allowNull: false },
    student_email: { type: DataTypes.CHAR(30), unique: true, allowNull: false },
    student_department: { type: DataTypes.CHAR(3) },
    /* student_department: {
      type: DataTypes.CHAR(3),
      references: { model: 'Department', foreignKey: 'department_code' } },
    FOREIGN KEY (student_department) REFERENCES Department (department_code) */
  });

  Student.associate = (db) => {
    db.Student.belongsTo(db.Department, {
      foreignKey: 'department_code',
    });
  };

  return Student;
};
