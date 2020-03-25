import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/home";
import VocabularyList from "./components/vocabulary-list";
import Practice from "./components/practice";

import './App.css';

function App() {

  const state = {
    vocabulary: [
      {
          "Language1": "English",
          "Language2": "German",
          "Word1": "tree",
          "Word2": "Baum",
      },
      {
          "Language1": "English",
          "Language2": "German",
          "Word1": "cat",
          "Word2": "Katze",
      },
      {
          "Language1": "English",
          "Language2": "German",
          "Word1": "dog",
          "Word2": "Hund",
      },
      {
          "Language1": "English",
          "Language2": "German",
          "Word1": "table",
          "Word2": "Tisch",
      },
      {
          "Language1": "English",
          "Language2": "German",
          "Word1": "house",
          "Word2": "Haus",
      },
      {
          "Language1": "English",
          "Language2": "German",
          "Word1": "house",
          "Word2": "Haus",
      },
  ],
  }

  return (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/vocabularylist" component={() => <VocabularyList vocabulary={state.vocabulary}/>}/>
        <Route path="/practice" component={() => <Practice vocabulary={state.vocabulary}/>}/>
    </Switch>
  );
}

export default App;
