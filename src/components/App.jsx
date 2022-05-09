import { Component } from "react";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleChange = evt => {
    const { value, id } = evt.target;
    this.setState({ name: value, key: id });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, contacts, key } = this.state;
    const contact = {
      name,
      key
    }

    contacts.push(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', key: '' });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>
              Name
              <input
                type="text"
                name="name"
              id={nanoid()}
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
              
            <button type="submit">
              Add contact
            </button>
          </form>
        
          <h2>Contacts</h2>
          <ul>
            {contacts.map(({ name, key }) => {
              return (
                <li key={key}>{name}</li>
              )})}
          </ul>
        </>
    );
  }
}