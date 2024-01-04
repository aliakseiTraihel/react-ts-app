import {useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Registration.css'

function Registration() {

  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    name: '',
    email: '',
    password: '',
    accept: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [success, setSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleValidation = () => {
    let valid = true;
    const refs: React.RefObject<HTMLInputElement>[] = [];

    if (!auth.name || (auth.name && auth.name.length < 6)) {
      setErrors((errors) => ({...errors, name: 'Min name length 6 characters'}))
      valid = false;
      refs.push(nameRef);
    } else {
      setErrors((errors) => ({...errors, name: ''}))
    }

    if (!auth.email || (auth.email && !auth.email.includes('@'))) {
      setErrors((errors) => ({...errors, email: 'Email is not valid'}))
      valid = false;
      refs.push(emailRef);
    } else {
      setErrors((errors) => ({...errors, email: ''}))
    }

    if (!auth.password || (auth.password && auth.password.length < 6)) {
      setErrors((errors) => ({...errors, password: 'Min password length 6 characters'}))
      valid = false;
      refs.push(passwordRef);
    } else {
      setErrors((errors) => ({...errors, password: ''}))
    }

    if(refs[0] && refs[0].current) {
      refs[0].current.focus()
    }

    return valid;
  }

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleValidation()) {
      sessionStorage.setItem("auth_react_app", JSON.stringify(auth));
      clearForm()
      setSuccess(true)
      navigate('/profile');
    }
  }

  const clearForm = () => {
    setAuth({
      name: '',
      email: '',
      password: '',
      accept: false
    })
  }

  return (
    <div>
      <form noValidate className="form" onSubmit={handleForm}>
        <div>
          <label htmlFor="name">
            Name:&nbsp;
            <input onChange={(e) => setAuth({...auth, name: e.target.value})} required
            ref={nameRef}
            name="name"
            value={auth.name}
            placeholder="name" />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:&nbsp;
            <input onChange={(e) => setAuth({...auth, email: e.target.value})} required
            ref={emailRef}
            type="email"
            name="email"
            value={auth.email}
            placeholder="example@mail.com" />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:&nbsp;
            <input onChange={(e) => setAuth({...auth, password: e.target.value})} required
            ref={passwordRef}
            type="password"
            name="password"
            value={auth.password}
            placeholder="password" />
           {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="accept">
            Accept Terms:&nbsp;
            <input onChange={(e) => {
              setSuccess(false)
              setAuth({...auth, accept: e.target.checked})}
            } required
            type="checkbox"
            checked={auth.accept}
            name="accept"
            id="accept"/>
          </label>
        </div>
        {success && <p style={{ color: 'green' }}>Submited</p>}
        <div>
          <button disabled={!auth.accept} type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Registration
