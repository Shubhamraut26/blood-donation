import './App.css';

import { Header } from './components/Header';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Search} from './components/Search';
import { DCRegister } from './components/DCRegister';
import { About } from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/home" render={()=><Home />}/>
          <Route path="/login" render={()=><Login/>}/>
          <Route path="/register" render={()=><Register/>}/>
          <Route path="/search" render={()=><Search/>}/>
          <Route path="/dcregister" render={()=><DCRegister/>}/>
          <Route path="/about" render={()=><About/>}/>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
