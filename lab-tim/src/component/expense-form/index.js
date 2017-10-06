import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: props.expense ? props.expense.categoryId : props.categoryId,
      id: props.expense ? props.expense.id : undefined,
      timestamp: props.expense ? props.expense.timestamp : undefined,
      name: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if a new expense is being passed in update the state to reflect the change
  // componentWillReceiveProps(props) {
  //   if(props.expense) this.setState(props.expense);
  // }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    // if (!this.props.expense) {
    //   this.setState({name: ''});   //this line clears out the submit box on submit click
    // }
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          name="name"
          placeholder="enter an expense"
          value={this.state.name}
          onChange={this.handleChange}/>
        <input
          required
          type="number"
          name="price"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
