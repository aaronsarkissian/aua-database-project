const sequelizeFixtures = require('sequelize-fixtures');
const models = require('../db');
const express = require('express');

const router = express.Router();

/* router.post('/create', async (req, res) => {
  try {
    await models.user.create({
      username: req.body.username,
      id: req.params.user_id,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}); */

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
      console.log('JSON IS HERERRERER');
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.post('/student1', async (req, res) => {
  try {
    await models.Student.create({
      student_id: 'A09140046',
      first_name: 'Anri',
      last_name: 'Marutyan',
      student_email: 'anri_marutyan@edu.aua.am',
      student_department: 'CS',
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.post('/student2', async (req, res) => {
  try {
    await models.Student.create({
      student_id: 'A09140483',
      first_name: 'Aaron',
      last_name: 'Sarkissian',
      student_email: 'aaron_sarkissian@edu.aua.am',
      student_department: 'CS',
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.get('/student1/destroy', async (req, res) => {
  try {
    await models.Student.destroy({
      where: {
        student_id: 'A09140046',
      },
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.get('/student2/destroy', async (req, res) => {
  try {
    await models.Student.destroy({
      where: {
        student_id: 'A09140483',
      },
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
