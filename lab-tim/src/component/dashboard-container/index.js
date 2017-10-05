import './_dashboard-container.scss';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import {categoryCreate as categoryActionCreate} from '../../action/category-actions';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this);
    this.props.categoryCreate({title: 'rent', budget: '2000'});
    this.props.categoryCreate({title: 'food', budget: '500'});
    this.props.categoryCreate({title: 'auto', budget: '500'});
  }

  render() {
    return (
      <main className="dashboard-container">
        <h1>expense tracker dashboard</h1>
        <h2>create a new category.</h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate} />
        <div className="category-list">
          {this.props.categories.map((item) => {
            console.log('category item', item);
            return (
              <CategoryItem
                key={item.id}
                category={item}
              />
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
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
