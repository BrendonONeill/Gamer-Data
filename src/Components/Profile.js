import { useContext } from "react";
import GlobalContext from "../GlobalContext";

function Profile() {
  // Context call
  const { currentUser, games } = useContext(GlobalContext);
  return (
    <>
      <div>
        <div className="profile-card">
          <div className="profile-card-img">
            <img
              src="../user.svg"
              alt="user profile pic"
              width="200px"
              height="200px"
            ></img>
          </div>
          <div className="profile-card-section">
            <h3>
              {currentUser.fname} {currentUser.lname}
            </h3>
          </div>
          <div className="profile-card-section">
            <p>{currentUser.email}</p>
          </div>
          <div className="profile-card-section">
            <p>Games in collection: {games.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
