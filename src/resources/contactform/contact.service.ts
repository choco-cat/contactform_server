const Contact = require('./contact.model.ts');

type IContact =  typeof Contact;

const addContact = async (contactRow: IContact): Promise<Partial<IContact>> => 
     contactRow
    // GOTO: check all fields
;

module.exports = { addContact };
export {};