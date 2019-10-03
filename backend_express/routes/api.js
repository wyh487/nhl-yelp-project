const express = require('express');
const router = express.Router();
const {getTeams, getTeamsById, getSchedules} = require('../api/index')

/* GET home page. */
router.get('/schedules', async(req, res, next) => {
  try {
    const data = await getSchedules()
    console.log(data)
    res.json(data)
  } catch (e) {
    console.log('err', e)
    res.json({error: e})
  }
});


module.exports = router;
