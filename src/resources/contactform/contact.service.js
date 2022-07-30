const Contact = require('./contact.model');

const addContact = async (contactRow) => {
    return (
        contactRow.name
        && contactRow.email
        && contactRow.phone
        && contactRow.birthday
        && contactRow.message
    );
};

module.exports = { addContact };
