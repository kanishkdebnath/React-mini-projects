interface CellProps {
  filled: boolean;
  onClick: () => void;
}

const Cell = ({ filled, onClick }: CellProps) => {
  return (
    <div
      className="cell"
      onClick={onClick}
      style={{ backgroundColor: filled ? "green" : "transparent" }}
    ></div>
  );
};

export default Cell;
