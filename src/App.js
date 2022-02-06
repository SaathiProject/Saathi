import logo from './logo.svg';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
