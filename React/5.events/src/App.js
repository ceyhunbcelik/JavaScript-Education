import React from 'react';

import News from './components/News';

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

class App extends React.Component{

  addNews(){
    console.log('addNew function runned!');
    news.push({
      id: 4,
      title: 'Title 4',
      description: 'Description 4'
    });

    console.log(news);
  }

  render() {
    return (
      <div>
        <News
          news={news}
          addNews={this.addNews}
          // name="Ceyhun"
          user="cvc"
        />
      </div>
    );
  };
}

export default App;
