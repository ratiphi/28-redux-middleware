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
  constructor(props) {
    super(props);
    this.state = {
      expenseForm: false,
      categoryForm: false,
    };
    this.toggleExpense = this.toggleExpense.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  toggleExpense() {
    this.setState({expenseForm: !this.state.expenseForm});
  }

  toggleCategory() {
    this.setState({categoryForm: !this.state.categoryForm});
  }

  render() {
    return (
      <div className='category-item'>
        <div className='content-container'>
          <button className='category-delete' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
          <button onClick={this.toggleCategory}>edit category</button>
          <button onClick={this.toggleExpense}>new expense</button>
          <h2>{this.props.category.title} - budget: ${this.props.category.budget}</h2>

          {this.state.categoryForm ?
            <CategoryForm
              buttonText='update category'
              onComplete={this.props.categoryUpdate}
              category={this.props.category}
              toggle={this.toggleCategory}/>
            :
            undefined
          }
        </div>

        <div className='expense-items'>
          <div className='content-container'>
            {this.state.expenseForm ?
              <ExpenseForm
                buttonText='create expense'
                categoryId={this.props.category.id}
                onComplete={this.props.expenseCreate}
                toggle={this.toggleExpense}/>
              :
              undefined
            }

            {this.props.expenses[this.props.category.id].length ?
              this.props.expenses[this.props.category.id].map((expense) =>
                <ExpenseItem key={expense.id} expense={expense}/>)
              :
              <h3>currently no expenses</h3>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses,
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
