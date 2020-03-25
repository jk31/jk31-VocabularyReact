import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/home";
import VocabularyList from "./components/vocabulary-list";
import Practice from "./components/practice";

import './App.css';

function App() {
  return (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/vocabularylist" component={VocabularyList} exact />
        <Route path="/practice" component={Practice} />
    </Switch>
  );
}

export default App;
