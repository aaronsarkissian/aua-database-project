const sequelizeFixtures = require('sequelize-fixtures');
const models = require('../db');
const express = require('express');

const router = express.Router();

router.post('/department', async (req, res) => {
  try {
    await models.Department.create({
      department_code: 'CS',
      department_name: 'BS Computer Sciences',
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.post('/all', async (req, res) => {
  try {
    await sequelizeFixtures.loadFile('data/full_data.json', models).then(() => {
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.post('/create', async (req, res) => {
  try {
    await models.Student.create({
      student_id: req.body.student_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      student_email: `${req.body.first_name.toLowerCase()}_${req.body.last_name.toLowerCase()}@edu.aua.am`,
      student_department: req.body.student_department,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.get('/:student_id/delete', async (req, res) => {
  try {
    await models.Student.destroy({
      where: {
        student_id: req.params.student_id,
      },
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
