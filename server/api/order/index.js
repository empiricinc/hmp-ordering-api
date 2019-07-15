var express = require('express');
var controller = require('./order.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/approve-all', controller.approveAll);
router.put('/:id', controller.upsert);
router.put('/approve/:id', controller.approve);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
