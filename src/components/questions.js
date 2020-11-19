import { Component } from "react";
import { v1 } from "uuid";

class Questions extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-7 m-auto">
        <h2 className="text-center my-3">Question</h2>
        {this.props.questions.map((question) => (
          <div key={v1()}>
            <div className="text-bold my-3">{question.question}</div>
            {question.answers.map((answer) => (
              <div className="form-check" key={v1()}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.question}
                  id={answer.answer}
                />
                <label className="form-check-label" htmlFor={answer.answer}>
                  {answer.answer}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Questions;
