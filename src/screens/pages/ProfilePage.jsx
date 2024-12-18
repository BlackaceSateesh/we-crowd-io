import TextInput from "../../components/ui/TextInput";
import "../../styles/ProfilePage.css";
const ProfilePage = () => {
  return (
    <>
      <div className="ProfilePage martop">
        <div className="inner cardBox">
          {/* <div className="profileImg">
            <img src="" alt="" />
          </div> */}
          <div className="input-container">
            <TextInput disabled={"disabled"} placeholder={"Name"} labelName="Name" />
            <TextInput disabled={"disabled"} placeholder={"Mobile"} labelName="Mobile" />
            <TextInput disabled={"disabled"} placeholder={"Email"} labelName="Email" />
            <TextInput disabled={"disabled"} placeholder={"Joining Date"} labelName="Joining Date" />
            <TextInput disabled={"disabled"} placeholder={"Status"} labelName="Status" />
            <TextInput disabled={"disabled"} placeholder={"Active Date"} labelName="Active Date" />
            {/* <TextInput disabled={"disabled"} placeholder={"Global Crowd Share Status"} labelName="Global Crowd Share Status" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
