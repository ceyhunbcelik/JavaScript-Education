import React from 'react';

import NewsItem from './NewsItem';

class News extends React.Component{
    render() {

      const news = [
        {
          title: 'Title 1',
          description: 'Description 1'
        },
        {
          title: 'Title 2',
          description: 'Description 2'
        },
        {
          title: 'Title 3',
          description: 'Description 3'
        },
      ];

      return (
        <div>
            <NewsItem
              title={news[0].title}
              description={news[0].description}
            />
            <NewsItem
              title={news[1].title}
              description={news[1].description}
            />
            <NewsItem
              title={news[2].title}
              description={news[2].description}
            />
        </div>
      )
    };
}

export default News;