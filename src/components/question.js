import { Component } from "react";
import { v1 } from "uuid";

class Question extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="text-bold my-3">
            {this.props.index + 1}. {this.props.question.question}
          </div>
          {this.props.question.answers.map((answer) => (
            <div className="form-check" key={v1()}>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name={this.props.question.question}
                  checked={answer === this.props.userAnswers[this.props.index]}
                  onChange={() =>
                    this.props.selectAnswer(this.props.index, answer)
                  }
                  value={answer.answer}
                />
                {answer.answer}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
