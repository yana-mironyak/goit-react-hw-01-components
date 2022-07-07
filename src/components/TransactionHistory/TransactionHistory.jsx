import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return ( 
        <table className={css.transaction_history}>
            <thead>
                <tr>
                <th className={css.t_title}>Type</th>
                <th className={css.t_title}>Amount</th>
                <th className={css.t_title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item =>
                    <tr key={item.id}>
                    <td className={css.t_value}>{item.type}</td>
                    <td className={css.t_value}>{item.amount}</td>
                    <td className={css.t_value}>{item.currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

