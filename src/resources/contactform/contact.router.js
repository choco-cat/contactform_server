const express = require('express');

const router = express.Router();
const Contact = require('./contact.model');
const contactformService = require('./contact.service');

router.route('/').post(async (req, res) => {
  const newContact = await contactformService.addContact(new Contact(req.body));
  if (newContact) {
    res.status(201).json(newContact);
  } else {
    res.status(400).json({message: 'User not created'});
  }
});

module.exports = router;
