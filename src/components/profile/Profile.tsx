import {useEffect, useReducer, useState} from "react";
import {reducer, ActionType} from "./Reducer.tsx";

import './Profile.css'

function Profile() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    birth: '',
    gender: ''
  });
  
  const [state, dispatch] = useReducer(reducer, {show: false});

  const handleForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData);
    setUser({...user, ...dataObject})
    dispatch({type: ActionType.HIDE})
    event.target.reset();
  }

  useEffect(() => {
      if (sessionStorage.length > 0 && sessionStorage.getItem("auth_react_app") != null) {
        setUser(JSON.parse(sessionStorage.getItem("auth_react_app") as string))
      }
    }, [])
  
  if (!(user && user.name)) {
    return (<h3>User not find</h3>)
  }

  return (
    <div className="profile">
        <h1>Profile</h1>
        { state.show &&
          <div className="modal">
            <div className="modal-content">
              <div className="modal-content_top">
                <button onClick={() => dispatch({type: ActionType.HIDE})}>X</button>
                <h2>Modal Window</h2>
              </div>
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
                    <p>Date of Birth:&nbsp;</p>
                    <input required name="birth"
                      type="date"
                      defaultValue={user.birth}
                      placeholder="birth" />
                  </label>
                </div>
                <div>
                  <label htmlFor="gender">
                    <p>Gender:&nbsp;</p>
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
             </div>
            </div>
        }
        <div className="user-info">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.birth}</p>
          <p>{user.gender}</p>
          <button onClick={() => dispatch({type: ActionType.SHOW})} className="edit-button">Edit</button>
        </div>
      </div>
    )
}

export default Profile;