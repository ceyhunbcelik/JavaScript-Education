import React from 'react';

import NewsItem from './NewsItem';

class News extends React.Component{
    render() {

      const title = 'React.js';
      const description = 'React Description';

      return (
        <div>
            <NewsItem
              title={title}
              description={description}
            />
        </div>
      )
    };
}

export default News;