const express = require('express');
const router = express.Router();
const Contact = require('./contact.model');
const contactformService = require('./contact.service');

router.route('/').post(async (req, res) => {
  const newContact = await contactformService.addContact(new Contact(req.body));
  if (newContact) {
    res.status(201).json({message: 'Contact is created', result: 'success'});
  } else {
    res.status(400).json({message: 'Contact not created', result: 'error'});
  }
});

module.exports = router;
