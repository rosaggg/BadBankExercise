import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllData from "./components/AllData";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Home from "./components/Home";
import Withdraw from "./components/Withdraw";
import UserContextProvider, { UserContext } from "./UserContext"
import './App.css'

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;

