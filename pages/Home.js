import React from 'react';
import NewsCards from './../components/NewsCards/NewsCards';

const Home = ({ articles }) => {

  return (
    <div>
      <NewsCards articles={articles} />
    </div>
  );
};

export default Home;
