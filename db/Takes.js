module.exports = (sequelize, DataTypes) => {
  const Takes = sequelize.define('Takes', {
    /* student_id: {
      type: DataTypes.CHAR(12),
      references: { model: 'Student', foreignKey: 'student_id' },
      primaryKey: true },
    section_id: {
      type: DataTypes.INTEGER(5).ZEROFILL,
      references: { model: 'Section', foreignKey: 'section_id' },
      primaryKey: true },
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (section_id) REFERENCES Section(section_id), */
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
// id is null, it seems we don't need id here
