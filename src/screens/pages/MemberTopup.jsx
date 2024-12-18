import { ButtonLinear } from "../../components/ui/Buttons";
import SelectInput from "../../components/ui/SelectInput";
import TextInput from "../../components/ui/TextInput";

const MemberTopup = () => {
  return (
    <>
      <div className="MemberTopup">
        <div className="cardBox half martop">
          <div className="top">
            <h5 className="heading">Fund wallet : $ 0</h5>
          </div>
          <div className="input-container">
            <TextInput
              placeholder={"Enter Username"}
              labelName="Username"
            />
            <SelectInput
              defaultValue={"Select Package"}
              labelName="Select Package"
              options={["Select Package", "Package 1", "Package 2", "Package 3", "Package 4", "Package 5", "Package 6", "Package 7", "Package 8", "Package 9", "Package 10"]}
            />
          </div>
          <div className="btns">
            <ButtonLinear name={"Withdraw"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberTopup;
