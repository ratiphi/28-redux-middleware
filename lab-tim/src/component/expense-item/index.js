import './_expense-item.scss';

import React from 'react';
import {connect} from 'react-redux';
import {
  expenseUpdate as expenseActionUpdate,
  expenseDelete as expenseActionDelete,
} from '../../action/expense-actions';
import ExpenseForm from '../expense-form';


class ExpenseItem  extends React.Component {
  render() {
    console.log('__EXPENSE ITEM STATE__', this.state);
    console.log('__EXPENSE ITEM PROPS__', this.props);

    return (
      <div className="expense-item" id={this.props.expense.id}>
        <button className='expense-delete' onClick={()=>this.props.expenseDelete(this.props.expense)}>X</button>
        <p>{this.props.expense.name}: {this.props.expense.price}</p>
        <ExpenseForm
          categoryId={this.props.expense.categoryId}
          buttonText='update expense'
          onComplete={this.props.expenseUpdate}
          expense={this.props.expense}/>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseActionUpdate(expense)),
    expenseDelete: (expense) => dispatch(expenseActionDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
