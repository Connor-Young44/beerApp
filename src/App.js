import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/Details/:id" component={DetailsPage} />
        <Route path="/Articles" component={ArticlesPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
