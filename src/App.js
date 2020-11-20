import React, { Component } from "react";
import questions from "./data/questions";
import Questions from "./components/questionsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.state = {
      userAnswers: new Array(questions.length),
    };
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
        </div>
      </div>
    );
  }
}

export default App;
