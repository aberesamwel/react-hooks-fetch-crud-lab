import React from "react";

function QuestionItem({ question, onDeleteClick, onAnswerChange  }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  const handleDelete = () => {
    onDeleteClick(id);
  };
  const handleAnswerChange = (e) => {
    const newCorrectIndex = parseInt(e.target.value);
    onAnswerChange(id, newCorrectIndex);
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}onChange={handleAnswerChange}>
          {options}
          </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;