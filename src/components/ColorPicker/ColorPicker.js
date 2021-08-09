import s from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map(item => (
          <span
            className={s.option}
            style={{ backgroundColor: item.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}
export default ColorPicker;
