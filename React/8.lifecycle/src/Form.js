import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.changeUSD = this.changeUSD.bind(this);
    }

    state = {
        usd: 0
    }

    changeUSD(e){
        this.setState({
            usd: e.target.value
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate Running..', nextProps, nextState);
        return (nextState.usd % 10) === 0;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate Running..', nextProps, nextState);
    }

    render() {
      console.log('Form Render Running..')
      return (
        <div>
          <input name="tl" id="tl" onChange={this.changeUSD} />
          <br /><br />

          Apple Price: 10$ <br />
          You can buy {this.state.usd / 10} Apple!
        </div>
      )
    };
}

export default Form;