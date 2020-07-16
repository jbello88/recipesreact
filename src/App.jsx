import React from 'react';
import {Switch, Route, useHistory  } from "react-router-dom";
import Main from './Main';
import Detail from './Detail';
import './App.css';

function App() {
  console.log("App rendering"); 
  const history = useHistory();
  console.log(history);

  const setRoute = (id) =>
  {
    
    if(id){
        history.push(`/recipe/${id}`)
    }
    else {
      history.push('/')
    }
  }

  return <div className="App">
    <Switch>
          <Route exact path="/">
            <Main setRoute={setRoute} />
          </Route>
          <Route path="/recipe/:id">
            <Detail setRoute={setRoute} />
          </Route>
        </Switch>
    </div>


}

export default App;
