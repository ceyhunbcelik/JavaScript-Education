import React from 'react';

import NewsItem from './NewsItem';

class News extends React.Component{
    render() {
      let nameElement = <div>Ceyhun</div>
      return (
        <div>
            {nameElement}

            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
      )
    };
}

export default News;