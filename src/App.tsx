import {useRef, useState } from 'react';
import './App.css'

function App() {

  const [formData, setFormData] = useState({
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

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleValidation = () => {
    let valid = true;
    const refs: React.RefObject<HTMLInputElement>[] = [];

    if (!formData.name || (formData.name && formData.name.length < 6)) {
      setErrors((errors) => ({...errors, name: 'Min name length 6 charachters'}))
      valid = false;
      refs.push(nameRef);
    } else {
      setErrors((errors) => ({...errors, name: ''}))
    }

    if (!formData.email || (formData.email && !formData.email.includes('@'))) {
      setErrors((errors) => ({...errors, email: 'Email is not valid'}))
      valid = false;
      refs.push(emailRef);
    } else {
      setErrors((errors) => ({...errors, email: ''}))
    }

    if (!formData.password || (formData.password && formData.password.length < 6)) {
      setErrors((errors) => ({...errors, password: 'Min password length 6 charachters'}))
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
      clearForm()
      alert("Success")
    }
  }

  const clearForm = () => {
    setFormData({
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
            <input onChange={(e) => setFormData({...formData, name: e.target.value})} required
            ref={nameRef}
            name="name"
            value={formData.name}
            placeholder="name" />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:&nbsp;
            <input onChange={(e) => setFormData({...formData, email: e.target.value})} required
            ref={emailRef}
            type="email"
            name="email"
            value={formData.email}
            placeholder="example@mail.com" />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:&nbsp;
          <input onChange={(e) => setFormData({...formData, password: e.target.value})} required
            ref={passwordRef}
            type="password"
            name="password"
            value={formData.password}
            placeholder="password" />
           {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="accept">
            Accept Terms:&nbsp;
          <input onChange={(e) => setFormData({...formData, accept: e.target.checked})} required
            type="checkbox"
            checked={formData.accept}
            name="accept"
            id="accept"/>
          </label>
        </div>
        <div>
          <button disabled={!formData.accept} type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
