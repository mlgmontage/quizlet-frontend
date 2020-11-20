import React, { Component } from "react";
import questions from "./data/questions";
import Questions from "./components/questionsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.showOrHideResults = this.showOrHideResults.bind(this);

    this.state = {
      userAnswers: new Array(questions.length),
      resultsBox: false,
    };
  }

  showOrHideResults() {
    if (this.state.userAnswers.length === questions.length) {
      this.setState({
        resultsBox: !this.state.resultsBox,
      });
    } else {
      alert("Answer to all questions");
    }
  }

  selectAnswer(questionNumber, answer) {
    console.log(answer);
    const userAnswers = [...this.state.userAnswers];
    userAnswers[questionNumber] = answer;
    this.setState({
      userAnswers,
    });
  }

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
          <Questions
            selectAnswer={this.selectAnswer}
            userAnswers={this.state.userAnswers}
            questions={questions}
          />

          <div className="text-center my-3">
            <button
              onClick={this.showOrHideResults}
              className="btn btn-secondary "
            >
              {this.state.resultsBox ? "Hide results" : "Show results"}
            </button>
          </div>
        </div>

        <div
          className="text-center alert alert-warning col-md-6 m-auto"
          style={{ display: this.state.resultsBox ? "block" : "none" }}
        >
          {
            this.state.userAnswers.filter(
              (answer) => answer && answer.isCorrect
            ).length
          }{" "}
          out of {questions.length}
        </div>
      </div>
    );
  }
}

export default App;
