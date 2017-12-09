module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    department_code: { type: DataTypes.CHAR(3), primaryKey: true },
    department_name: { type: DataTypes.CHAR(50), primaryKey: true, unique: true },
  });

  Department.associate = (db) => {
    db.Department.hasMany(db.Course);
  };
  return Department;
};
