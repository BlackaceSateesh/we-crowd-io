import { ButtonLinear } from "../../components/ui/Buttons"
import TextInput from "../../components/ui/TextInput"

const Withdrawal = () => {
  return (
    <>
      <div className="Withdrawal">
        <div className="cardBox half martop">
            <div className="top">
                <h5 className="heading">Main Wallet : $ 0</h5>
            </div>
            <div className="input-container">
                <TextInput placeholder={"Enter Amount"} labelName="Amount" />
            </div>
            <div className="btns">
                <ButtonLinear name={"Withdraw"} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Withdrawal
