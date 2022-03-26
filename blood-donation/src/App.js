import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Search} from './components/Search';
import { DCRegister } from './components/DCRegister';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Login />
      <Home />
      <Register />
      <Search />
      <DCRegister />
      <About />
    </div>
  );
}

export default App;
