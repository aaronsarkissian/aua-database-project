module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    section_id: {
      type: DataTypes.INTEGER(5).ZEROFILL,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    section_term: { type: DataTypes.CHAR(1) },
    section_building: { type: DataTypes.ENUM, values: ['MB', 'PAB'] },
    section_room: { type: DataTypes.CHAR(10) },
    section_capacity: { type: DataTypes.INTEGER },
    section_week_days: { type: DataTypes.ENUM, values: ['M W F', 'T R', 'M', 'T', 'W', 'R', 'F', 'S'] },
    section_start_hour: { type: DataTypes.NUMERIC(2), range: [0, 23] },
    section_start_minute: { type: DataTypes.NUMERIC(2), range: [0, 59] },
    section_end_hour: { type: DataTypes.NUMERIC(2), range: [0, 23] },
    section_end_minute: { type: DataTypes.NUMERIC(2), range: [0, 59] },
  });

  Section.associate = (db) => {
    db.Section.belongsTo(db.Course, {
      foreignKey: 'course_id',
    });

    db.Section.belongsTo(db.Instructor, {
      foreignKey: 'instructor_id',
    });
    db.Section.hasMany(db.Takes, {
      foreignKey: 'section_id',
    });
  };


  return Section;
};
