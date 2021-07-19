import './App.css';
import { Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import ProminalList from "./components/ProminalList.jsx"
import ProminalDetail from './components/ProminalDetail';
import NewItem from "./components/NewItem";

function App() {
  return (
    <div className="App">
      <Navbar />

        
      <div className="list">
      <Route exact path="/">
        <ProminalList/>
      </Route>
      </div>
      
      <Route exact path="/:id">
        <ProminalDetail />
      <Link to="/" className="back">
          <ArrowBackIcon />
      </Link>
      </Route>

      <Route exact path="/new-item">
        <NewItem />
      </Route>
    </div>
  );
}

export default App;
