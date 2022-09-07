import React from "react";
import questions from "../../public/questions.json";

export default function QuestionModal() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div>
      {isStarted ? (
        <div>
          {questions.map(() => (
            <div>hi</div>
          ))}
        </div>
      ) : (
        <div>
          <p>QuestionModal</p>
          <button
            onClick={() => {
              setIsStarted(true);
            }}
          ></button>
        </div>
      )}
    </div>
  );
}
