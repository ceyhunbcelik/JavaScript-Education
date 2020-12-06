import React from 'react';

import NewsItem from './NewsItem';

class App extends React.Component{
  render() {
    return (
      <div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  };
}

export default App;
