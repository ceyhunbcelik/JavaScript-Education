import React from 'react';

class FirstNumber extends React.Component{
    render() {
    console.log('FIRST NUMBER')

      return (
        <div>
          {this.props.firstNumber}
        </div>
      )
    };
}

export default FirstNumber;