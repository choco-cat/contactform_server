class Contact {
  id;

  name;

  email;

  phone;

  birthday;

  message;

  constructor({
    id,
    name,
    email,
    phone,
    birthday,
    message
  } = {}) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
    this.message = message;
  }
}

module.exports = Contact;

