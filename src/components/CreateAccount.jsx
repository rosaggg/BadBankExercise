import React from 'react'
import { UserContext } from "../UserContext"
import Card from './Card'

const CreateAccount = () => {
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext); 
    console.log(ctx) 
    let nav = document.getElementById("account");
    if (nav !== null) {
      document.getElementById("account").className = "nav-link active";
      document.getElementById("deposit").className = "nav-link";
      document.getElementById("withdraw").className = "nav-link";
      document.getElementById("data").className = "nav-link";
    }
   
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }

    function validatePassword(password) {
      if (password.length <=7) {
        setStatus('Error: Password must include more than 7 characters');
        setTimeout(() => setStatus(''),3000)
        return false;
      }
      return true;
    }
  
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validatePassword(password, 'password')) return;
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="info"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} required/><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} required/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} required/><br/>
                <button type="submit" className="btn btn-light" disabled={name ==="" || email ==="" || password.length <= 8 || password===""} onClick={handleCreate}>Create Account</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    )
  }
  export default CreateAccount