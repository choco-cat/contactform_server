interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  message: string;
}

class Contact {
  id: string;

  name: string;

  email: string;

  phone: string;

  birthday: string;

  message: string;

  constructor({
    id,
    name,
    email,
    phone,
    birthday,
    message
  } = {} as IContact) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
    this.message = message;
  }
}

module.exports = Contact;
export {};
