import React from 'react';

import '../css/NewsItem.css';

class NewsItem extends React.Component{
    render() {
      const { title, description } = this.props
      return (
        <div>
          <h1 className="title">{title}</h1>
          <p>{description}</p>
        </div>
      )
    };
}

export default NewsItem;