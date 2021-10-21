import './App.css';
import GetStarted from './cryptos/GetStarted';
import HomePage from './cryptos/HomePage';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
   
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/getstarted" component={GetStarted} exact/>
        {/* <Route component={Error}/> */}
    </Switch>
   
    
  
  );
}

export default App;
