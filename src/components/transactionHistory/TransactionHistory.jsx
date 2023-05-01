import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={style.transactionhistory}>
    <thead className={style.tablethead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={style.tabledata}>{item.type}</td>
          <td className={style.tabledata}>{item.amount}</td>
          <td className={style.tabledata}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  itemss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
