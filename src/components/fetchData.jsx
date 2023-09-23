import { React, useState, useEffect } from 'react';

const stockData = [
  {
    temp: {
      city: 'Chicago',
      state: 'IL',
    },
    company: 'Twitter Inc',
    ticker: 'TWTR',
    stockPrice: '22.76 USD',
    timeElapsed: '5 sec ago',
  },
  {
    temp: {
      city: 'San Jose',
      state: 'CA',
    },
    company: 'Square Inc',
    ticker: 'SQ',
    stockPrice: '45.28 USD',
    timeElapsed: '10 sec ago',
  },
  {
    temp: {
      city: 'Palo Alto',
      state: 'CA',
    },
    company: 'Shopify Inc',
    ticker: 'SHOP',
    stockPrice: '341.79 USD',
    timeElapsed: '3 sec ago',
  },
];

function ReturnData(data) {
  const [posts, setPosts] = useState([]);

  const handleOnSubmit = (e) => {
    setPosts(e.target.value);
  };
  const apiURL = 'https://jsonplaceholder.typicode.com/todos';
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <button type='submit' onClick={handleOnSubmit}>
        Submit
      </button>
      <div>
        {posts.map((item) => {
          return (
            <>
              <li>{item.userId}</li>
              <li>{item.title}</li>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ReturnData;
