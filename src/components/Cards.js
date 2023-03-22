import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export function Cards({ prod, idx, setCount, count }) {
    // following show and setShow line is an example for state where state is the one among many type of hooks. useState mentioned here is the hook of state. the show and setShow name is kept just for our convenient and we can keep any name we want but we must always use the word set which is a norm in this syntax. here show is initial state and setShow is a changeable function
    const [show, setShow] = useState(true);
    function addToCart() {
      setShow(!show)
      setCount(count + 1)
    }
    function removeFromCart() {
      setShow(!show)
      setCount(count - 1)
    }
    return (
  
  
      <Card key={idx} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
          <Card.Title> {prod.productName}</Card.Title>
          <Card.Text>
            {prod.price} RS</Card.Text>
          <Card.Text>
            {prod.rating}❤</Card.Text>
          {/* <Button
              variant="primary"
              // EXAMPLE FOR HANDLING EVENTS(HERE onClick event is used inside a function which is one of the events)
              onClick={() => console.log("BUY BUTTON CLICKED")}
            >BUY NOW</Button>{"   "} */}
  
           {show ? <Button
            variant="primary"
            //on clicking buy now button, the value of show will be changed from true to false and again from false to true alternatively!
            onClick={addToCart}
          >ADD TO CART</Button> : ""}
  
  
  
  
          {/* conditional rendering  */}
          {!show ? <Button
            variant="danger"
            //  EXAMPLE FOR HANDLING EVENTS(HERE onClick event is used inside a function which is one of the events)
            onClick={removeFromCart}
          >REMOVE FROM CART</Button> : ""}
   
  

  
  
  
  
        </Card.Body>
      </Card>
  
    )
  }