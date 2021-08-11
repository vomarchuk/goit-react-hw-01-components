import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.headerList}>
          <th className={s.headerItem}>Type</th>
          <th className={s.headerItem}>Amount</th>
          <th className={s.headerItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={s.listItem} key={item.id}>
            <td className={s.item}>{item.type}</td>
            <td className={s.item}>{item.amount}</td>
            <td className={s.item}>{item.currency}</td>
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
