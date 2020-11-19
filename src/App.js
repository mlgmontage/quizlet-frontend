import React, { Component } from "react";
import questions from "./data/questions";
import Questions from "./components/questionsList";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="container my-4">
          <h1 className="text-center">
            <i className="fa fa-tree"></i>
          </h1>
          <h1 className="text-center">Quizlet</h1>
        </header>
        <div className="container">
          <Questions questions={questions} />
        </div>
      </div>
    );
  }
}

export default App;
