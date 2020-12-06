import React from 'react';

import News from './components/News';

class App extends React.Component{
  render() {

    const news = [
      {
        id: 1,
        title: 'Title 1',
        description: 'Description 1'
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'Description 2'
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'Description 3'
      },
    ];

    return (
      <div>
        <News
          news={news}
          name="Ceyhun" 
        />
      </div>
    );
  };
}

export default App;
