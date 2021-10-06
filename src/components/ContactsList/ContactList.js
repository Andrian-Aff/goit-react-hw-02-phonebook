import s from './Contacts.module.css'

const ContactList =({contacts, onDeleteContact}) => (
    <ul className={s.list}>
        {contacts.map(({id, name, number}) => (
            <li key={id}
            className={s.list__item}>
                {name}:{number}
            <button className={s.button} onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>
        ))
        }

    </ul>
)

export default ContactList