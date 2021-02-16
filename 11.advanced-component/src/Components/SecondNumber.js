import React from 'react';

class SecondNumber extends React.PureComponent{

    /*
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.secondNumber !== this.props.secondNumber;
    }
    */

    render() {
    console.log('SECOND NUMBER')
      return (
        <div>
          {this.props.secondNumber}
        </div>
      )
    };
}

export default SecondNumber;