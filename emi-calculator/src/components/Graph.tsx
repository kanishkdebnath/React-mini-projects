import { Pie } from "react-chartjs-2";

interface GraphProps {
  chartData: any;
}

const Graph = ({ chartData }: GraphProps) => {
  return (
    <div className="graph">
      <Pie data={chartData} />;
    </div>
  );
};

export default Graph;
