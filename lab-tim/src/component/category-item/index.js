import './_category-item.scss';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import {expenseCreate as expenseActionCreate} from '../../action/expense-actions';
import {
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete,
} from '../../action/category-actions';

class CategoryItem  extends React.Component {
  render() {
    return (
      <div className='category-item'>
        <h2>{this.props.category.title}</h2>
        <h3>total: ${this.props.category.budget}</h3>
        <CategoryForm
          buttonText='update category'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />
        <button className='category-delete' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
        <ExpenseForm
          buttonText='create expense'
          categoryId={this.props.category.id}
          onComplete={this.props.expenseCreate}
        />
        <div className='expense-items'>
          {this.props.expenses.map((expense) =>
            <ExpenseItem key={expense.id} expense={expense} category={this.props} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id],
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryActionUpdate(category)),
    categoryDelete: (category) => dispatch(categoryActionDelete(category)),
    expenseCreate: (expense) => dispatch(expenseActionCreate(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
