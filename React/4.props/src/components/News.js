import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

class News extends React.Component{

  static defaultProps = {
    name: "BAHADIR"
  };

    render() {

      const element = this.props.news.map(news =>
        <NewsItem
          key={news.id}
          newsData={news}
        />
      );

      return (
        <div>
          { this.props.name }
          { element }
        </div>
      )
    };
}

News.propTypes = {
  news: PropTypes.array,
  name: PropTypes.string.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

export default News;