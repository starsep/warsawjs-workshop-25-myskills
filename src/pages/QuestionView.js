import React from 'react';
import './QuestionView.css';
import database from '../dummy/db.json';
import Question from '../components/Question';
import updateQuestions from '../data/updateQuestions';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ questions: database.questions });
  }

  render() {
    const { questions } = this.state;
    return (
      <section>
        <ol className="QuestionView-list">
          {questions.map(question => (
            <Question onValueChange={this.onValueChange.bind(this)} key={question.id} {...question} />
          ))}
        </ol>
      </section>
    );
  }

  onValueChange = (id) => ({ target: { value } }) => {
    this.setState(state => updateQuestions(state, id, value));
  }
}


export default QuestionView;
