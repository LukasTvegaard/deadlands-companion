import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { EdgePage } from "./containers/EdgePage";

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/edges">Edges</Link>
            </li>
            <li>
              <Link to="/weapons">Weapons</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/edges">
            <EdgePage />
          </Route>
          <Route path="/weapons">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
