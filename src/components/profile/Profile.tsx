import {useEffect, useState} from "react";
import './Profile.css'
import Modal from "../modal/Modal.tsx";

function Profile() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    birth: '',
    gender: ''
  });
  
  const [editMode, setEditMode] = useState(false);
  const handleForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData);
    setUser({...user, ...dataObject})
    setEditMode(false)
    event.target.reset();
  }

  useEffect(() => {
      if (sessionStorage.length > 0 && sessionStorage.getItem("auth_react_app") != null) {
        setUser(JSON.parse(sessionStorage.getItem("auth_react_app") as string))
      }
    }, [])
  
  return (
    <div className="profile">
      <div>
      <h1>Profile</h1>
      {user && user.name && <>
        {
          editMode ?
          <Modal show={editMode} onHide={() => setEditMode(false)}>
              <form noValidate className="edit-form" onSubmit={handleForm}>
                <div>
                  <label htmlFor="name">
                    <p>Name:&nbsp;</p>
                    <input required name="name"
                      type="text"
                      defaultValue={user.name}
                      placeholder="name" />
                  </label>
                </div>
                <div>
                  <label htmlFor="birth">
                    <p>Age:&nbsp;</p>
                    <input required name="birth"
                      type="date"
                      defaultValue={user.birth}
                      placeholder="birth" />
                  </label>
                </div>
                <div>
                  <label htmlFor="gender">
                    <p>Name:&nbsp;</p>
                    <select name="gender" id="gender" defaultValue={user.gender}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    </label>
                </div>
                <div>
                  <button type="submit" className="save-button">Save</button>
                </div>
              </form>
          </Modal> :
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.birth}</p>
            <p>{user.gender}</p>
            <button onClick={() => setEditMode(true)} className="edit-button">Edit</button>
          </>
        }
      </>
      }
      </div>
    </div>
    )
}

export default Profile;