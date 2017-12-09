module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    course_id: {
      type: DataTypes.INTEGER(4).ZEROFILL,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    subject_code: { type: DataTypes.CHAR(10) },
    course_code: { type: DataTypes.INTEGER },
    course_title: { type: DataTypes.CHAR(20) },
    course_credits: { type: DataTypes.INTEGER },
    course_start_year: { type: DataTypes.NUMERIC(4), range: [2017, 2020] },
    course_start_month: { type: DataTypes.NUMERIC(2), range: [0, 12] },
    course_start_day: { type: DataTypes.NUMERIC(2), range: [0, 31] },
    course_end_year: { type: DataTypes.NUMERIC(4), range: [2017, 2020] },
    course_end_month: { type: DataTypes.NUMERIC(2), range: [0, 12] },
    course_end_day: { type: DataTypes.NUMERIC(2), range: [0, 31] },
    /* course_department: {
      type: DataTypes.CHAR(3),
      references: { model: 'Department', foreignKey: 'department_code' } },
    FOREIGN KEY (course_department) REFERENCES Department(department_code) */
  });

  Course.associate = (db) => {
    db.Course.belongsTo(db.Department, {
      foreignKey: 'department_code',
    });
  };
  return Course;
};
