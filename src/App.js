import React from "react";
import BookLandingPage from "./BookLandingPage";
import NavBar from "./NavBar";
import BookForm from "./BookForm";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import BookSearch from "./BookSearch";

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/Sell">
          <BookForm />
        </Route>
        <Route exact path="/">
          <BookLandingPage />
        </Route>
        <Route exact path="/Search">
          <BookSearch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
