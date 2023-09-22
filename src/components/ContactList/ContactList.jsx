import React, { Component } from 'react';
import style from './ContactList.module.css';
class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, number, name }) => (
          <li key={id} className={style.contactItem}>
            <p className={style.contactDetails}>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => this.props.onDeleteContact(id)}
              className={style.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
