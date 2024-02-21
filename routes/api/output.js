const router = require('express').Router();

const {
getMsg,
getSingleMsg
} = require('../../controllers/PostMsgController');

router.route('/').get(getMsg);

router
.route('/:MsgId').get(getSingleMsg);

module.exports = router;