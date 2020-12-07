import React from 'react';

class Counter extends React.Component{

    state = {
        number: 0
      };

    increase = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
      return (
        <div>
          <h2>{this.state.number}</h2>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
      )
    };
}

export default Counter;