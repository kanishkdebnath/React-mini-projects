interface ResultProps {
  principle: number;
  emi: number;
  interest: number;
  amount: number;
}

const Result = ({ principle, emi, interest, amount }: ResultProps) => {
  return (
    <div className="result">
      <span className="field">
        <span>Monthly EMI</span>
        <span>{emi.toFixed(0)}</span>
      </span>
      <span className="field">
        <span>Total Principle amount</span>
        <span>{principle.toFixed(0)}</span>
      </span>
      <span className="field">
        <span>Total Interest amount</span>
        <span>{interest.toFixed(0)}</span>
      </span>
      <span className="field">
        <span>Total Amount</span>
        <span>{amount.toFixed(0)}</span>
      </span>
    </div>
  );
};

export default Result;
