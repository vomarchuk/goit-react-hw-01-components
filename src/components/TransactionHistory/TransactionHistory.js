import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.Table}>
      <thead>
        <tr className={s.HeaderList}>
          <th className={s.HeaderItem}>Type</th>
          <th className={s.HeaderItem}>Amount</th>
          <th className={s.HeaderItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={s.ListItem} key={item.id}>
            <td className={s.Item}>{item.type}</td>
            <td className={s.Item}>{item.amount}</td>
            <td className={s.Item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
