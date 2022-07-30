import * as express from 'express';
import { Request, Response } from 'express';

const router = express.Router();
const Contact = require('./contact.model.ts');
const contactformService = require('./contact.service.ts');

router.route('/').post(async (req: Request, res: Response) => {
  const newContact = await contactformService.addContact(new Contact(req.body));
  if (newContact) {
    res.status(201).json({message: 'Contact is created'});
  } else {
    res.status(400).json({message: 'Contact not created'});
  }
});

module.exports = router;
