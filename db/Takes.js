module.exports = (sequelize, DataTypes) => {
  const Takes = sequelize.define('Takes', {
    grading_type: { type: DataTypes.ENUM, values: ['Standart', 'Pass/No Pass'] },
    grade_code: { type: DataTypes.CHAR(2) },
    grade: { type: DataTypes.INTEGER, range: [0, 4] },
    pass_fail: { type: DataTypes.ENUM, values: ['Pass', 'Fail'] },
  });

  Takes.associate = (db) => {
    db.Takes.belongsTo(db.Student, {
      foreignKey: 'student_id',
    });

    db.Takes.belongsTo(db.Section, {
      foreignKey: 'section_id',
    });
  };

  return Takes;
};
