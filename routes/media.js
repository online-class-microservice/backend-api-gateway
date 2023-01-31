const express = require('express');
const router = express.Router();

const mediaHandler = require('./handler/media')
router.post('/', mediaHandler.createMedia);
router.get('/', mediaHandler.getMedia);
router.delete('/:id', mediaHandler.deleteMedia);

module.exports = router;
