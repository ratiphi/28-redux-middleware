import React from 'react';

class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(e) {
    let jsonItem = JSON.stringify(this.props.dataTransferItem);
    e.dataTransfer.setData('application/json', jsonItem);
    let data = e.dataTransfer.getData('application/json');
  }

  render() {
    return (
      <div
        className='draggable'
        draggable='true'
        onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
