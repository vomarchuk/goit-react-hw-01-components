import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './Statidtics.module.css';

function Statidtics({ title, stats }) {
  return (
    <section className={s.Statidtics}>
      <h2 className={s.Title}>{title}</h2>
      <ul className={s.List}>
        {stats.map(item => (
          <li
            key={item.id}
            className={
              item.label === '.docx'
                ? s.docx
                : item.label === '.pdf'
                ? s.pdf
                : item.label === '.mp3'
                ? s.mp3
                : item.label === '.psd'
                ? s.psd
                : s.none
            }
          >
            <StatisticsItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statidtics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statidtics;
