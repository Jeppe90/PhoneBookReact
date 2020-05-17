import React, {  useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signOut, changeUserAvatar } from "../../actions";
import { storage } from "../../config/fbConfig";

const SignedInLinks = (props) => {
  const [image, setImage] = useState(null);
  
  const dispatch = useDispatch();

  const logOut = useCallback(
    () => dispatch(signOut()),
    [dispatch]
  )

  const updateUserAvatar = useCallback(
    (userId, imgUrl) =>
       dispatch(changeUserAvatar(userId, imgUrl)),
    [dispatch]
  )

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
    }
  };
    const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
      },
      (error) => {
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            updateUserAvatar(props.auth.uid, url);
          });
      }
    );
  };

  return (
          <ul className="right">
        <li>
          <i class="image material-icons" onClick={handleEditPicture}>
            image
          </i>
        </li>

        <li>
          <img
            src={props.profile.imgUrl}
            alt="not found"
            height="50"
            width="50"
          />
        </li>
        <input
          type="file"
          id="imageInput"
          hidden="hidden"
          onChange={handleChange}
        />
        <li>
          <NavLink to="/">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/contacts/new">Add Contact</NavLink>
        </li>
        <li>
          <NavLink to="/">{props.profile.initials}</NavLink>
        </li>
        <li>
          <button onClick={handleUpload}>change avatar</button>
        </li>
        <li>
          <a onClick={logOut}>Logout</a>
        </li>
      </ul>
  );
};

export default SignedInLinks;
