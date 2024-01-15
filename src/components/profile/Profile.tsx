import {useEffect, useReducer, useState} from "react";
import {reducer, ActionType} from "./Reducer.tsx";
import Modal from "../modal/Modal.tsx";
import {getUserData, updateUserData} from "../../storage/Storage.tsx";

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
    const dataObject = {...user, ...Object.fromEntries(formData)};

    setUser(dataObject)
    updateUserData(dataObject)
    dispatch({type: ActionType.HIDE})

    event.target.reset();
  }

  useEffect(() => {
      const userData = getUserData()
      userData && setUser(userData);
    }, [])
  
  if (!(user && user.name)) {
    return (<h3>User not found</h3>)
  }

  return (
    <div className="profile">
        <h1>Profile</h1>
        { state.show &&
           <Modal show={state.show} onClose={() => dispatch({type: ActionType.HIDE})}>
              <form noValidate className="edit-form" onSubmit={handleForm}>
                <div>
                  <label htmlFor="name">
                    <p>Name:&nbsp;</p>
                    <input required name="name"
                      id="name"
                      type="text"
                      defaultValue={user.name}
                      placeholder="name" />
                  </label>
                </div>
                <div>
                  <label htmlFor="birth">
                    <p>Date of Birth:&nbsp;</p>
                    <input required name="birth"
                      id="birth"
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
         </Modal>
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