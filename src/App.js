// App.js
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
import Loading from './loading';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  // Simulate loading more cards (replace with API call)
  const loadMoreCards = () => {
    setTimeout(() => {
      const newCards = Array.from({ length: 10 }, (_, index) => (
        <Card key={index} content={`Card ${index + 1}`} />
      ));
      setCards([...cards, ...newCards]);
      setPage(page + 1);
    }, 1000);
  };

  useEffect(() => {
    loadMoreCards(); // Initial load
  }, []);

  return (
    <div className="App">
      <h1>Lazy Loaded Cards</h1>
      <InfiniteScroll
        dataLength={cards.length}
        next={loadMoreCards}
        hasMore={page < 10} // Adjust the number of pages as needed
        loader={<Loading></Loading>}
      >
        {cards}
      </InfiniteScroll>
    </div>
  );
}

export default App;
