import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory ({items}){
    return(
<table className={css.transactionHistory}>
  <thead >
    <tr className={css.tableHeader}>
      <th className={css.item}>Type</th>
      <th className={css.item}>Amount</th>
      <th className={css.item}>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id,type,amount,currency,})=>( 
      <tr key={id} className={css.row}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>
    ))
     }
  </tbody>
</table>
    );
}

TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.string,
            currency:PropTypes.string,
            })
        ).isRequired,
}