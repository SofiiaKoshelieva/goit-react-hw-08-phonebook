import s from './Phonebook.module.css';
const Filter = ({ setFilter }) => {
  function change(e) {
    setFilter(e.target.value);
  }
  return (
    <label>
      Find contacts by name
      <input className={s.filter} type="text" onChange={change} />
    </label>
  );
};
export default Filter;
