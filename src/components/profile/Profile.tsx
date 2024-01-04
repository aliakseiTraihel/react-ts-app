import {useEffect, useState} from "react";

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
  }

  useEffect(() => {
      if (localStorage.length > 0) {
        setUser(JSON.parse(sessionStorage.getItem("auth_react_app") as string))
      }
    }, [])
  
  return (
    <>
      <h1>Profile</h1>
      {user && <>
        {
          editMode ?
          <>
              <form noValidate className="form" onSubmit={handleForm}>
                <div>
                  <label htmlFor="name">
                    Name:&nbsp;
                    <input required name="name"
                      defaultValue={user.name}
                      placeholder="name" />
                  </label>
                </div>
                <div>
                  <button type="submit">Save</button>
                </div>
              </form>
          </> :
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </>
        }
      </>
      }
    </>
    )
}

export default Profile;