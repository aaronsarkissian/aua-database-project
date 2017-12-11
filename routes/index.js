const models = require('../db');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const students = await models.Student.findAll({
      include: [models.Department],
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
