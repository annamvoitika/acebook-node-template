const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts');

router.get('/', PostsController.Index);
router.post('/', PostsController.Create);
router.get('/new', PostsController.New);
router.get('/edit', PostsController.Edit);
router.post('/edit/:_id', PostsController.Update);
router.post('/delete/:_id', PostsController.Delete);
module.exports = router;
