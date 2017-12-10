const models = require('../db');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const students = await models.Student.findAll({
      include: [models.Department],
      // attributes: ['student_id', 'first_name', 'last_name', 'student_email', 'student_department'],
    });

    res.render('index', {
      title: 'DB project',
      students,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
