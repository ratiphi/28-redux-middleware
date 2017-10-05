import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      id: props.category ? props.category.id : null,
      budget: props.category ? props.category.budget : 0,
      timestamp: props.category ? props.category.timestamp : null,
      //name: props.category ? props.category.name : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if a new category is being passed in update the state to reflect the change
  componentWillReceiveProps(props) {
    if(props.category) this.setState(props.category);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    // if (!this.props.category) {
    //   this.setState({title: ''});   //this line clears out the submit box on submit click
    // }
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          name="title"
          placeholder="enter a title"
          value={this.state.title}
          onChange={this.handleChange}/>
        <input
          required
          type="number"
          name="budget"
          placeholder="budget"
          value={this.state.budget}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
