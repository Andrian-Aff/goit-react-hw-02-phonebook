import s from './Filter.module.css';

const Filter = ({filter, onChangeName})=> (
<label className={s.lable}>Number
      <input className={s.input}
          type="text"
          name="filter"
          placeholder="input name/number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //   title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={filter}
          onChange={onChangeName}
        />
      </label>
)
export default Filter

