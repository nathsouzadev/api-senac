const express = require('express');

const router = express.Router();

const savePost = require('./controller/createPostController');
const listPost = require('./controller/listPostController');
const listUser = require('./controller/listUserController');

router.get('/', (request, response) => {
    response.json({"mensagem": "API do e-Senac"})
})

router.get('/posts', listPost.list)
router.post('/posts', savePost.save)

router.post('/user', listUser.findUser)

module.exports = router;
