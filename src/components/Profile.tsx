import {useEffect, useState} from "react";

function Profile() {
  
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  
  useEffect(() => {
    if (localStorage.length > 0) {
      setUser(JSON.parse(sessionStorage.getItem("auth_react_app") as string)) 
    }
    }, [])
  
  return (
    <>
      <h1>Profile</h1>
      {user && <>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </>
      }
      <a href="#">Edit</a>
    </>
    )
}

export default Profile;