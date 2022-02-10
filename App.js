import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';

function App() {

  const alanKey = 'ea90a5be89e9a7ae5653b41d0ecf3efa2e956eca572e1d8b807a3e2338fdd0dc/stage';

  const [newsArticles, setNewsArticles] = useState([]);
  
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home articles={newsArticles} />
        </Route>
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
