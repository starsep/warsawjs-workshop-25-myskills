import MultiQuestion from './MultiQuestion/MultiQuestion';
import NumberQuestion from './NumberQuestion/NumberQuestion';
import TextQuestion from './TextQuestion/TextQuestion';
import SelectQuestion from './SelectQuestion/SelectQuestion';

const questionMap = {
  multi: MultiQuestion,
  number: NumberQuestion,
  text: TextQuestion,
  select: SelectQuestion,
};

const Question = (props) => {
  const { type } = props;
  return questionMap[type](props);
};

export default Question;
