import React from "react";

const ChallengeStats = ({ index, total, correctLevels }) => (
  <h1>
    Level {Math.min(index + 1, total)} / {total}
    <small>
      Correct {correctLevels} / {index}
    </small>
  </h1>
)

export default ChallengeStats;
