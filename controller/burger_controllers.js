const router = require('express').Router()
const burger = require('../models/burger.js')


// Get 
router.get('/burgers', (req, res) => {
    burger.getAll(burgers => {
      res.json(burgers)
    })
  })
  
  // Create 
  router.post('/burgers', (req, res) => {
    burger.createOne(req.body, id => {
      res.json({ id })
    })
  })
  
  // Update 
  router.put('/burgers/:id', (req, res) => {
    burger.updateOne(req.body, { id: req.params.id }, () => {
      res.sendStatus(200)
    })
  })

  module.exports = router