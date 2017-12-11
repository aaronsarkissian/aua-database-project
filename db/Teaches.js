module.exports = (sequelize, DataTypes) => {
  const Teaches = sequelize.define('Teaches', {
  });

  Teaches.associate = (db) => {
    db.Teaches.belongsTo(db.Instructor, {
      foreignKey: 'instructor_id',
    });

    db.Teaches.belongsTo(db.Section, {
      foreignKey: 'section_id',
    });
  };

  return Teaches;
};
