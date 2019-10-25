const express = require('express');
const router = express.Router();
const {getTeams, getTeamsById, getSchedules, getGoogleSuggestions} = require('../api/index')
const { Place } = require('../models')

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
      await Place.findOrCreate({
        where: {
          name: data[des].name
        }, defaults: {
          address: data[des].address,
          description: des,
          isOpen: data[des].isOpen || false
        }
      })
    })
    console.log('success! ', place)
    res.json(data)
  } catch (e) {
    res.json({error: e})
  }
});


module.exports = router;
