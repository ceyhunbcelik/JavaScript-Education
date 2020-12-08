import React from 'react';

class Child extends React.Component{

    constructor(props){
        super(props);
        console.log('Child constructor Running');
    }

    componentWillMount(){
        console.log('Child componentWillMount Running..')
    }

    render() {
      console.log('Child Render Running..')
      return (
        <div>
          Child
        </div>
      )
    };

    componentDidMount(){
        console.log('Child componentDidMount Running..')
    }
}

export default Child;