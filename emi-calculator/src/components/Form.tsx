import { INPUT_FIELDS } from "../utils/constant";
import SliderInput from "./SliderInput";

interface FormProps {
  setPrinciple: (input: number) => void;
  setRateOfInterest: (input: number) => void;
  setTenure: (input: number) => void;
}

const Form = ({ setPrinciple, setRateOfInterest, setTenure }: FormProps) => {
  return (
    <div className="form">
      <SliderInput
        lable={INPUT_FIELDS.principle.lable}
        min={INPUT_FIELDS.principle.min}
        max={INPUT_FIELDS.principle.max}
        defaultValue={INPUT_FIELDS.principle.defaultValue}
        onChange={setPrinciple}
      />

      <SliderInput
        lable={INPUT_FIELDS.rateOfInterest.lable}
        min={INPUT_FIELDS.rateOfInterest.min}
        max={INPUT_FIELDS.rateOfInterest.max}
        defaultValue={INPUT_FIELDS.rateOfInterest.defaultValue}
        onChange={setRateOfInterest}
      />

      <SliderInput
        lable={INPUT_FIELDS.tenure.lable}
        min={INPUT_FIELDS.tenure.min}
        max={INPUT_FIELDS.tenure.max}
        defaultValue={INPUT_FIELDS.tenure.defaultValue}
        onChange={setTenure}
      />
    </div>
  );
};

export default Form;
