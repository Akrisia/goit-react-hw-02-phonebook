import { Component } from "react";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    const contact = {
      name,
      number,
      id: nanoid()
    }

    contacts.push(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
              
            <button type="submit">
              Add contact
            </button>
          </form>
        
          <h2>Contacts</h2>
          <ul>
            {contacts.map(({ name, number, id }) => {
              return (
                <li key={id}>{name}: {number}</li>
              )})}
          </ul>
        </>
    );
  }
}