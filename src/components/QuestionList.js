import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteClick, onAnswerChange }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
         {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteClick={onDeleteClick}
            onAnswerChange={onAnswerChange}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;