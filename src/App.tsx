import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EdgeDetailPage } from "./containers/EdgeDetailPage";
import { EdgePage } from "./containers/EdgePage";
import { Header } from "./containers/Header";
import { getEdgeDetailByKey, getEdgeByString } from "./edges/EdgeUtil";

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Weapons</h2>;
}

function App() {
  return (
    <Router>
      <>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/edges" exact>
            <EdgePage />
          </Route>
          <Route
            path="/edges/:id"
            render={(routeProps) => {
              console.log(routeProps);
              const edgeParam = getEdgeByString(routeProps.match.params.id);
              const edgeDetail = getEdgeDetailByKey(edgeParam);
              if (edgeDetail !== undefined) {
                return <EdgeDetailPage edgeDetail={edgeDetail} />;
              }

              return <div>Edge not found</div>;
            }}
          />

          <Route path="/weapons">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
