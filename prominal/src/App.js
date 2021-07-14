import './App.css';
import { Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"

import ProminalList from "./components/ProminalList.jsx"
import ProminalDetail from './components/ProminalDetail';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/">
        <ProminalList />
      </Route>

      <Route exact path="/:id">
        <ProminalDetail />
      </Route>
    </div>
  );
}

export default App;
