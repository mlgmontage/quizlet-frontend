import { Component } from "react";
import { v1 } from "uuid";
import Question from "./question";

class Questions extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-7 m-auto">
        <h2 className="text-center my-3">Question</h2>
        {this.props.questions.map((question, inx) => (
          <Question
            selectAnswer={this.props.selectAnswer}
            userAnswers={this.props.userAnswers}
            key={v1()}
            question={question}
            index={inx}
            highlight={this.props.highlight}
          />
        ))}
      </div>
    );
  }
}

export default Questions;
