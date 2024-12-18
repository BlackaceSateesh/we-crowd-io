import { ButtonLinear } from "../../components/ui/Buttons";
import TextInput from "../../components/ui/TextInput";
import "../../styles/ProfilePage.css";
const EditProfilePage = () => {
  return (
    <>
      <div className="ProfilePage martop">
        <div className="inner cardBox">
          {/* <div className="profileImg">
            <img src="" alt="" />
          </div> */}
          <div className="input-container">
            <TextInput placeholder={"Name"} labelName="Name" />
            <TextInput placeholder={"Mobile"} labelName="Mobile" />
            <TextInput placeholder={"Email"} labelName="Email" />
            <TextInput placeholder={"Joining Date"} labelName="Joining Date" />
            <TextInput placeholder={"Status"} labelName="Status" />
            <TextInput placeholder={"Active Date"} labelName="Active Date" />
            {/* <TextInput
              placeholder={"Global Crowd Share Status"}
              labelName="Global Crowd Share Status"
            /> */}
          </div>
          <div className="btns">
            <ButtonLinear name={"Update Profile"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
