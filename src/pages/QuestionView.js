import React from 'react';
import './QuestionView.css';
import FakeData from '../dummy/db.json';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: []};
  }

  render() {
    const { questions } = this.state;
    return (
      <section>
        <ol className="QuestionView-list">
          {questions.map(question =>
            <li>{question.question}</li>
          )}
        </ol>
      </section>
    );
  }

  fetchData() {
    this.setState({questions: FakeData.questions});
  }

  componentDidMount() {
    this.fetchData()
  }
}


export default QuestionView;