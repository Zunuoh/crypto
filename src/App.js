import './App.css';
// import GetStarted from './cryptos/GetStarted';
// import HomePage from './cryptos/HomePage';
// import ContactUs from './cryptos/ContactUs';
// import Dashboard from './cryptos/dashboard/Dashboard';
// import { Switch, Route } from "react-router-dom";
import MyCounter from './contextFolder/components/MyCounter';
import GlobalContextProvider from './contextFolder/context/GlobalContext';


function App() {
  return (
    // <Switch>
    //     <Route path="/" component={HomePage} exact/>
    //     <Route path="/getstarted" component={GetStarted} exact/>
    //     <Route path="/contact" component={ContactUs} exact/>
    //     <Route path="/dashboard" component={Dashboard} exact/>
    //     {/* <Route component={Error}/> */}
    // </Switch>
    <GlobalContextProvider>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:40}}>
      {/* <h1>CONTEXT API</h1> */}
      <MyCounter/>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
