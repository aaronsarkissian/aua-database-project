module.exports = (sequelize, DataTypes) => {
  const Prerequisites = sequelize.define('Prerequisites', {

  });

  Prerequisites.associate = (db) => {
    db.Prerequisites.belongsTo(db.Course, {
      foreignKey: 'course_id',
    });

    db.Prerequisites.belongsTo(db.Course, {
      foreignKey: 'course_id',
    });
  };

  return Prerequisites;
};
