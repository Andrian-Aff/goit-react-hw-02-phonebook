  import s from './ContactForm.module.css'
  import React, {Component} from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }
  handleChangeName = e =>{
    const {name, value} = e.target
    this.setState(
      {[name]: value})
      console.log(e.target.name)
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset =()=> {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const {name, number} = this.state
    return (
  <form className={s.form} onSubmit={this.handleSubmit}>
    <label className={s.lable}>Name
      <input className={s.input}
        type="text"
        name="name"
        placeholder="Sara Winters"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={this.handleChangeName}
      />
    </label>
    <label className={s.lable}>Number
      <input className={s.input}
          type="tel"
          name="number"
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={this.handleChangeName}
        />
      </label>
  
    <button type="submit" disabled={!name}>Add contact</button>
  </form>
   );} 
}
  

export default ContactForm;