import { useState } from "react";

export default function Baller() {
  // const [balls,setBalls]=useState(0);
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);

  const handleNoRuns = () => {
    const updatedRuns = runs + 0;
    setRuns(updatedRuns);

    const updatedBalls = balls + 1;
    setBalls(updatedBalls);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);

    const updatedBalls = balls + 1;
    setBalls(updatedBalls);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
    const updatedBalls = balls + 1;
    setBalls(updatedBalls);
  };
  return (
    <div className="card1">
      {balls >= 6 && <h2>Over Complete</h2>}
      <h3>Balls: {balls}</h3>
      <h3>Runs: {runs}</h3>
      <button onClick={handleNoRuns}>No Runs</button>
      <button onClick={handleFour}>Fours</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
