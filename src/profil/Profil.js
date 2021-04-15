import React from "react";
import PropTypes from "prop-types";
const ProfileComponent = ({ fullname, bio, profession, src, alertMe }) => {
    const style = { color: "red", textDecoration: 'underline' }

    return (
        <div  >
            <h1 style={{ color: "blue" }}> welcome</h1>
            <h1 className="profile">MY PROFILE</h1>
            <h1 style={style}>my name is {fullname} and my bio {bio} and my profession {profession}</h1>
            <img src={src} width="200px" alt='IMG'/>
           <br></br> <button onClick={alertMe}> click me</button>

        </div>
    );


}
ProfileComponent.defaultProps = {
    fullname: "Gaaloul Najmeddine",
    bio: "Etudiant",
    profession: "etudiant"
}
ProfileComponent.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
export default ProfileComponent;