import { useState } from "react";
import "./App.css";
import InputSection from "./components/InputSection/InputSection";
import ResetButton from "./components/ResetButton/ResetButton";
import StatusSection from "./components/StatusSection/StatusSection";
import SuperBoard from "./components/SuperBoard/SuperBoard";
import TitleSection from "./components/TitleSection/TitleSection";
import { useAppDispatch } from "./app/hooks";
import { addPlayers } from "./features/players/playersSlice";

function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [showInput, setShowInput] = useState(true);
  const dispatch = useAppDispatch();

  const handleStartGame = () => {
    dispatch(addPlayers([first, second]));
    setShowInput(false);
  };
  return (
    <div className="app">
      <TitleSection />
      {showInput ? (
        <InputSection
          onFirstPlayerSubmit={setFirst}
          onSecondPlayerSubmit={setSecond}
          onStartGame={handleStartGame}
        />
      ) : (
        <>
          <StatusSection />
          <SuperBoard />
          <ResetButton />
        </>
      )}
    </div>
  );
}

export default App;
