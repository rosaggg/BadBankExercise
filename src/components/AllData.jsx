import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import './box.css'


const AllData = () => {
    // const ctx = React.useContext(UserContext);

  let nav = document.getElementById("account");
    if (nav !== null) {
      document.getElementById("account").className = "nav-link";
      document.getElementById("deposit").className = "nav-link";
      document.getElementById("withdraw").className = "nav-link";
      document.getElementById("data").className = "nav-link active";
    }

  const cardInfo = [
    {name: "abel", email: "abel@mit.edu", password: "secret", balance: 100},
  ];

  const renderCard = (card, index) => {
    return(
      <Card 
      bg="info"
      style={{ width: '18rem' }}
      key={index}
      className="box">
        <Card.Header>All Customer Data</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Name: {card.name} </ListGroup.Item>
          <ListGroup.Item>Email: {card.email} </ListGroup.Item>
          <ListGroup.Item>Password: {card.password} </ListGroup.Item>
          <ListGroup.Item>Balance: ${card.balance}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
  return (
    <div className="grid">{(cardInfo.map(renderCard))}</div>
  )   
}
  export default AllData