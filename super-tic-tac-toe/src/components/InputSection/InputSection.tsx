import { useState } from "react";
import submitIcon from "@Src/assets/submit.svg";
import undoIcon from "@Src/assets/undo.svg";
import "./InputSection.css";

interface InputSectionProps {
  onFirstPlayerSubmit: (first: string) => void;
  onSecondPlayerSubmit: (second: string) => void;
  onStartGame: () => void;
}

const InputSection = ({
  onFirstPlayerSubmit,
  onSecondPlayerSubmit,
  onStartGame,
}: InputSectionProps) => {
  const [first, setFirst] = useState("");
  const [showFirstInput, setShowFirstInput] = useState(true);

  const [second, setSecond] = useState("");
  const [showSecondInput, setShowSecondInput] = useState(true);

  const handleFirstPlayerSubmit = () => {
    onFirstPlayerSubmit(first);
    setShowFirstInput(false);
  };

  const handleSecondPlayerSubmit = () => {
    onSecondPlayerSubmit(second);
    setShowSecondInput(false);
  };

  const handleUndoFirst = () => {
    setFirst("");
    setShowFirstInput(true);
  };

  const handleUndoSecond = () => {
    setSecond("");
    setShowSecondInput(true);
  };

  const renderFirstPlayerInput = () => {
    return (
      <div className="input-name-block">
        <input
          type="text"
          placeholder="Enter first player's name"
          className="name-input"
          onChange={(e) => setFirst(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleFirstPlayerSubmit();
            }
          }}
        />
        <button
          disabled={!first}
          className="submit-name button-common"
          onClick={handleFirstPlayerSubmit}
        >
          <img src={submitIcon} alt="Submit" className="submit" />
        </button>
      </div>
    );
  };

  const renderSecondPlayerInput = () => {
    return (
      <div className="input-name-block">
        <input
          type="text"
          placeholder="Enter second player's name"
          className="name-input"
          onChange={(e) => setSecond(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSecondPlayerSubmit();
            }
          }}
        />
        <button
          disabled={!second}
          className="submit-name button-common"
          onClick={handleSecondPlayerSubmit}
        >
          <img src={submitIcon} alt="Submit" className="submit" />
        </button>
      </div>
    );
  };

  const renderFirstPlayer = () => {
    return (
      <div className="player-name-block">
        <span className="player-name">{first}</span>
        <button className="undo-name button-common" onClick={handleUndoFirst}>
          <img src={undoIcon} alt="Undo" className="undo" />
        </button>
      </div>
    );
  };

  const renderSecondPlayer = () => {
    return (
      <div className="player-name-block">
        <span className="player-name">{second}</span>
        <button className="undo-name button-common" onClick={handleUndoSecond}>
          <img src={undoIcon} alt="Undo" className="undo" />
        </button>
      </div>
    );
  };

  const renderPlayButton = () => {
    return (
      <button className="play-now" onClick={onStartGame}>
        Start the game
      </button>
    );
  };

  return (
    <>
      <div className="input-section">
        {showFirstInput && renderFirstPlayerInput()}
        {!showFirstInput && renderFirstPlayer()}
        {showSecondInput && renderSecondPlayerInput()}
        {!showSecondInput && renderSecondPlayer()}
      </div>
      {!showFirstInput && !showSecondInput && renderPlayButton()}
    </>
  );
};

export default InputSection;
