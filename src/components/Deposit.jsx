import React, { useContext } from 'react'
import Card from './Card';

import { UserContext } from '../UserContext';

const Deposit = () => {
  // console.log('Balance ctx, ctx')
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('')
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  let balance = 0;
  // // const users = React.useContext(UserContext); 
  // // let balance = users.balance;
  let nav = document.getElementById("account");
    if (nav !== null) {
      document.getElementById("account").className = "nav-link";
      document.getElementById("deposit").className = "nav-link active";
      document.getElementById("withdraw").className = "nav-link";
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

  function negNum(num){
    if (num < 0 ) {
      setStatus('Please enter a number greater than 0!');
      setTimeout(() => setStatus(''),3000);
      return false; 
    }
    return true;
  }
 
  function handleSubmit() {
    console.log(deposit);
    if (!notANum(deposit) || !negNum(deposit)) return;
    let newBalance = parseFloat(balance + deposit);
    setTotalState(newBalance);
    // users[0].deposits.push(parseFloat(deposit));
    // users[0].balance = balance;
    setShow(false);
  }
    
  function clearForm() {
    setDeposit(0);
    setShow(true);
  }


  return (
    <Card 
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
    Account Balance is ${totalState} <br/>
              <input type="input" className="form-control mb-3" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              Deposit Amount<br/>
              <button type="submit" className="btn btn-light" disabled={deposit === "" || deposit === 0} onClick={handleSubmit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit more money</button>
              </>
            )}
    />
  )
  }
  export default Deposit