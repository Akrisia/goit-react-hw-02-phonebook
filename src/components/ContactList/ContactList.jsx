import s from './ContactList.module.css';

const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <ul className={s.list}>
        {filteredContacts.map(({ name, number, id }) => {
            return (
                <li key={id} className={s.item}>
                    {name}: {number}
                    <button type='button' className={s.button} id={id} onClick={deleteContact}>Delete</button>
                </li>
        )})}
        </ul>
    )
};

export default ContactList;