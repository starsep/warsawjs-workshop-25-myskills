export default function updateQuestions({ questions = [] }, id, value) {
  const questionIndex = questions.findIndex(question => question.id === id);
  const prevQuestions = questions.slice(0, questionIndex);
  const nextQuestions = questions.slice(questionIndex + 1);
  const updatedQuestion = { ...questions[questionIndex], value };
  return [...prevQuestions, updatedQuestion, ...nextQuestions];
}
