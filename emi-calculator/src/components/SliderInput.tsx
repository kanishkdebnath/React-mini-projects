import { ChangeEvent, useEffect, useState } from "react";

interface SliderInputProps {
  lable: string;
  min: number;
  max: number;
  defaultValue: number;
  onChange: (input: number) => void;
}

const SliderInput = ({
  lable,
  min,
  max,
  defaultValue,
  onChange,
}: SliderInputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <div className="sliderInput">
      <div className="lableData">
        <span className="lable">{lable}</span>
        <span className="data">{inputValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="slider"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SliderInput;
