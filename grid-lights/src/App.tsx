import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

const config = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

function App() {
  const [order, setOrder] = useState<number[]>([]);
  const [resetting, setResetting] = useState(false);
  const totalBoxes = config.flat(1).filter((value) => value === 1).length;
  const handleClick = (index: number) => {
    if (resetting) {
      return;
    }

    const currentOrder = [...order, index];
    setOrder(currentOrder);
    if (currentOrder.length === totalBoxes) {
      setResetting(true);
    }
  };

  useEffect(() => {
    if (resetting) {
      const timer = setTimeout(() => {
        const currentOrder = [...order];
        currentOrder.pop();
        setOrder(currentOrder);
        if (currentOrder.length === 0) {
          setResetting(false);
          clearTimeout(timer);
        }
      }, 300);
    }
  }, [order]);
  return (
    <div className="container">
      <div className="grid">
        {config.flat(1).map((value, index) => {
          if (value === 1) {
            return (
              <Cell
                key={index}
                onClick={() => handleClick(index)}
                filled={order.includes(index)}
              />
            );
          } else {
            return <span key={index}></span>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
