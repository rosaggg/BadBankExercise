import React, { useContext } from 'react'
// import {UserContext} from './contexts/UserContext'

import Card from './Card';

const Withdraw = () => {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('')
  const [withdraw, setWithdraw] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  let balance = 100;
  // // const users = React.useContext(UserContext); 
  // // let balance = users.balance;
  let nav = document.getElementById("account");
    if (nav !== null) {
      document.getElementById("account").className = "nav-link";
      document.getElementById("deposit").className = "nav-link ";
      document.getElementById("withdraw").className = "nav-link active";
      document.getElementById("data").className = "nav-link";
    }

  function notANum(num){ 
    if (isNaN(parseFloat(num))) {
      setStatus('Please enter a number!');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function overdraft(num) {
    if (num > balance) {
      setStatus('You do not have enough funds!');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleSubmit() {
    console.log(withdraw);
    if (!notANum(withdraw) || !overdraft(withdraw)) return;
    let newBalance = parseFloat( balance - withdraw);
    setTotalState(newBalance);
     // users[0].withdraw.push(parseFloat(withdraw));
    // users[0].balance = balance;
    setShow(false);
  }

  function clearForm() {
    setWithdraw(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Account Balance is ${totalState}<br/>
              <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
              Withdraw Amount<br/>
              <button type="submit" className="btn btn-light" disabled={withdraw === "" || withdraw === 0} onClick={handleSubmit}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>s
              <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more money</button>
              </>
            )}
    />
  )
  }
  export default Withdraw