const sequelizeFixtures = require('sequelize-fixtures');
const models = require('../db');
const express = require('express');

const router = express.Router();

router.post('/all', async (req, res) => {
  try {
    await sequelizeFixtures.loadFile('data/full_data.json', models).then(() => {
    });
    res.render('index', {
      title: 'Data imported successfully',
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/findStudent', async (req, res) => {
  try {
    const students = await models.Student.findAll({
      where: {
        first_name: req.body.student_name,
      },
    });

    res.render('index', {
      title: 'All students',
      students,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/createStudent', async (req, res) => {
  try {
    await models.Student.create({
      student_id: req.body.student_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      student_email: `${req.body.first_name.toLowerCase()}_${req.body.last_name.toLowerCase()}@edu.aua.am`,
      department_code: req.body.student_department,
    });
    const students = await models.Student.findAll({
      include: [models.Department],
    });

    res.render('index', {
      title: 'Student added',
      students,
    });
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
    const students = await models.Student.findAll({
      include: [models.Department],
    });

    res.render('index', {
      title: 'Student deleted',
      students,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/instructors', async (req, res) => {
  try {
    const instructor = await models.Instructor.findAll({
      // include: [models.Department],
    });

    res.render('index', {
      title: 'All instructors',
      instructor,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/students', async (req, res) => {
  try {
    const students = await models.Student.findAll({
      // include: [models.Department],
    });

    res.render('index', {
      title: 'All students',
      students,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/studentsEnvCourse', async (req, res) => {
  try {
    const studentsENV = await models.Student.findAll({
      include: [{
        model: models.Takes,
        where: {
          section_id: '00011',
        },
      }],
    });
    res.render('index', {
      title: 'All students taking ENV course',
      studentsENV,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/studentCSMajor', async (req, res) => {
  try {
    const CSstudents = await models.Student.findAll({
      where: {
        department_code: 'CS',
      },
    });
    res.render('index', {
      title: 'All CS students',
      CSstudents,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/courseCount', async (req, res) => {
  try {
    const courseCount = await models.Course.count({
      where: {
        course_start_year: '2017',
      },
    });
    res.render('index', {
      title: 'Number of courses offerd in 2017',
      courseCount,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
