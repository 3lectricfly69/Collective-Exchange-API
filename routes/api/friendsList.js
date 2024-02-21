const router = require('express').Router();


const {
getFriends,
} = require('../../controllers/friendController');


router.route('/').get(getFriends);


module.exports = router;