import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={s.filter}>
            Find contacts by name
            <input className={s.input}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

export default Filter;