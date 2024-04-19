import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Graph from "./components/Graph";
import Result from "./components/Result";
import { COLORS, INPUT_FIELDS } from "./utils/constant";

function App() {
  const [principle, setPrinciple] = useState(
    INPUT_FIELDS.principle.defaultValue
  );

  const [rateOfInterest, setRateOfInterest] = useState(
    INPUT_FIELDS.rateOfInterest.defaultValue
  );
  const [tenure, setTenure] = useState(INPUT_FIELDS.tenure.defaultValue);
  const calculateEmi = () => {
    const rate = rateOfInterest / 1200;
    const time = tenure * 12;
    return (principle * rate * (1 + rate) ** time) / ((1 + rate) ** time - 1);
  };
  const calculateTotalAmount = () => {
    return calculateEmi() * tenure * 12;
  };
  const calculateTotalInterest = () => {
    return calculateTotalAmount() - principle;
  };

  const pieChartData = [
    {
      name: "Principle",
      value: principle,
    },
    {
      name: "Interest",
      value: calculateTotalInterest(),
    },
  ];

  const chartData = {
    labels: pieChartData.map((item) => item.name),
    datasets: [
      {
        data: pieChartData.map((item) => item.value),
        backgroundColor: COLORS,
      },
    ],
  };

  return (
    <div className="app">
      <h1 className="title">EMI Calculator</h1>
      <div className="calculator">
        <div className="leftSection">
          <Form
            setPrinciple={setPrinciple}
            setRateOfInterest={setRateOfInterest}
            setTenure={setTenure}
          />
          <Result
            principle={principle}
            emi={calculateEmi()}
            interest={calculateTotalInterest()}
            amount={calculateTotalAmount()}
          />
        </div>
        <Graph chartData={chartData} />
      </div>
    </div>
  );
}

export default App;
