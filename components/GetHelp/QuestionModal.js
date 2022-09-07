import React from "react";
import questions from "../../public/questions.json";

export default function QuestionModal({ setShowModal }) {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="fixed h-screen w-screen z-50 flex justify-center items-center"
    >
      <div
        className="absolute bg-black bg-opacity-50 w-full h-full z-40"
        onClick={() => setShowModal(-1)}
      ></div>

      <div className="w-1/2 h-1/2 rounded-md p-5 bg-gray-200 z-50 relative">
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
    </motion.div>
  );
}
