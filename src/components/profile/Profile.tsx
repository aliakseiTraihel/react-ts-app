import {useEffect, useState} from "react";
import './Profile.css'

function Profile() {

  const [user, setUser] = useState({
    name: '',
    email: ''
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
      if (sessionStorage.length > 0) {
        setUser(JSON.parse(sessionStorage.getItem("auth_react_app") as string))
      }
    }, [])
  
  return (
    <div className="profile">
      <div>
      <h1>Profile</h1>
      {user && <>
        {
          editMode ?
          <>
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
                  <button type="submit" className="save-button">Save</button>
                </div>
              </form>
          </> :
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
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