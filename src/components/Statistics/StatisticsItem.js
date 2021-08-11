import PropTypes from 'prop-types';

import s from './Statidtics.module.css';
function StatisticsItem({ label, percentage }) {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
