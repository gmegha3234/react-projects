/* eslint-disable react/prop-types */
export default function Progress({ index, numQuestions, points, maxPossiblePoints,answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer != null)} />
      <div className="progress-content">
        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}