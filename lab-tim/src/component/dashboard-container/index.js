import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import {categoryCreate as categoryActionCreate} from '../../action/category-actions';
import {
  expenseInsert as expenseActionInsert,
  expenseDelete as expenseActionDelete,
} from '../../action/expense-actions';
import Dropzone from '../dropzone';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this);
  }

  handleDropzoneComplete(err, expense){
    if (err) {
      return console.error('dropzone err', err);
    } else {
      console.log('dropzone expense', expense);
      this.props.expenseDelete(expense);
      //TODO this line below is not paying the expense validation in the expense reducer.
      expense.categoryId = this.props.categories.id;
      this.props.expenseInsert(expense);
    }
  }

  componentDidMount() {
    //console.log('__DASHBOARD_PROPS__', this.props);
    this.props.categoryCreate({title: 'transportation', budget: '1000'});
    this.props.categoryCreate({title: 'housing', budget: '2000'});
  }

  render() {
    return (
      <main className="dashboard-container">
        <h1>expense tracker dashboard</h1>
        <h2>to create a new category, enter title and budget</h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate} />
        <div className="category-list">
          {this.props.categories.map((item) => {
            //console.log('category item', item);
            return (
              <Dropzone onComplete={this.handleDropzoneComplete}>
                <CategoryItem
                  key={item.id}
                  category={item}
                />
              </Dropzone>
            );
          }
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    expenseInsert: (expense) => dispatch(expenseActionInsert(expense)),
    expenseDelete: (expense) => dispatch(expenseActionDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
