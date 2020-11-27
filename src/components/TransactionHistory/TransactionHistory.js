import Transactions from './TransactionData';
import PropTypes from 'prop-types';

function TransactionHistory({ userTransactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {userTransactions.map(userTransaction => (
          <Transactions
            key={userTransaction.id}
            type={userTransaction.type}
            amount={userTransaction.amount}
            currency={userTransaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  userTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
