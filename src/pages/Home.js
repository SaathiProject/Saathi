import React, {useState} from 'react';

const Home = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        console.log(count);
    }

  return <div>
    <h1>{count}</h1>
    <button onClick={()=>increment()} >add</button>
  </div>;
};

export default Home;
