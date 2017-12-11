module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define('Instructor', {
    instructor_id: {
      type: DataTypes.INTEGER(3).ZEROFILL,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    first_name: { type: DataTypes.CHAR(25), allowNull: false },
    last_name: { type: DataTypes.CHAR(25), allowNull: false },
    instructor_email: { type: DataTypes.CHAR(30), unique: true, allowNull: false },
  });

  Instructor.associate = (db) => {
    db.Instructor.belongsTo(db.Department, {
      foreignKey: 'department_code',
    });
  };

  return Instructor;
};
