const express = require('express');
const controllers=require('./controllers');
const router = express.Router();

router.get('/mail/user/:email',controllers.getUser)
router.get('/mail/send',controllers.sendMail);
router.get('/mail/drafts/:email', controllers.getDrafts);
router.get('/mail/messages/:email', controllers.getMessages);
router.get('/mail/read/:email/:messageId', controllers.readMail);

module.exports = router;