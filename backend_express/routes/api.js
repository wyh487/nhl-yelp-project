const express = require('express');
const router = express.Router();
const {getTeams, getTeamsById, getSchedules, getGoogleSuggestions} = require('../api/index')

const db = require('../model')
//const { Place } = require('../model')

/* GET home page. */
router.get('/schedules', async(req, res, next) => {
  try {
    const data = await getSchedules()
    res.json(data)
  } catch (e) {
    res.json({error: e})
  }
});

router.get('/places', async(req, res, next) => {
  try {
    const data = await getGoogleSuggestions()
    Object.keys(data).forEach( async(des) => {
      await db.sequelize.query(
        `INSERT INTO places (name, address, description, isOpen) VALUES
         ("${data[des].name}", "${data[des].formatted_address}", "${des}", ${data[des].isOpen ? 1 : 0})`,
        { type: db.sequelize.QueryTypes.INSERT }
      )
    })
    console.log('success! ', place)
    res.json(data)
  } catch (e) {
    res.json({error: e})
  }
});


module.exports = router;
