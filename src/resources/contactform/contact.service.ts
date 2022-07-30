const Contact = require('./contact.model.ts');

type IContact =  typeof Contact;

const addContact = async (contactRow: IContact): Promise<boolean> => {
    return (
        contactRow.name
        && contactRow.email
        && contactRow.phone
        && contactRow.birthday
        && contactRow.message
    );
};

module.exports = { addContact };
export {};