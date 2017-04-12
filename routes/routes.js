const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const searchEventController = require('../controllers/searchEventsController');

router.route("/")
    .get(indexController.showIndex);

router.route("/search/:location")
    .post(searchEventController.searchForevents);

module.exports = router;