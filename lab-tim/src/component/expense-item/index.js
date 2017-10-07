import React from 'react';
import {connect} from 'react-redux';
import {
  expenseUpdate as expenseActionUpdate,
  expenseDelete as expenseActionDelete,
} from '../../action/expense-actions';
import ExpenseForm from '../expense-form';


class ExpenseItem  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editExpense: false,
    };
    this.toggleExpense = this.toggleExpense.bind(this);
  }

  toggleExpense() {
    this.setState({editExpense: !this.state.editExpense});
  }

  render() {
    return (
      <div className="expense-item" id={this.props.expense.id}>
        <button className='expense-delete' onClick={()=>this.props.expenseDelete(this.props.expense)}>X</button>
        <button onClick={this.toggleExpense}>edit expense</button>
        <p>{this.props.expense.name}: {this.props.expense.price}</p>

        {this.state.editExpense ?
          <ExpenseForm
            categoryId={this.props.expense.categoryId}
            buttonText='update expense'
            onComplete={this.props.expenseUpdate}
            toggle={this.toggleExpense}
            expense={this.props.expense}/>
          :
          undefined
        }
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
