import { Badge, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {


  const data = [
    {
      productImage: "https://www.apple.com/v/iphone/home/bn/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage: "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
      productName: "samsung galaxy S23",
      price: 90000,
      rating: 90,

    },
    {
      productImage: "https://cdn.dxomark.com/wp-content/uploads/medias/post-126764/Google-Pixel-7-Pro_featured-image-packshot-review.jpg",
      productName: "Google pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage: "https://images.indianexpress.com/2023/01/oneplus-11-5g-launch.jpg",
      productName: "one plus 11",
      price: 64000,
      rating: 50,
    }
  ]

  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <div className="cartdiv">
        <Badge bg="success">
          Cart {count}
        </Badge>
      </div>
      <div className="class-container">
        {data.map((prod, idx) => <Cards
          idx={idx}
          prod={prod}
          setCount={setCount}
          count={count}
        />)}
      </div >
    </div>


  );
}

export default App;




function Cards({ prod, idx, setCount, count }) {
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
        >ADD TO CART</Button> : ""} {"  "}




        {/* conditional rendering */}
        {!show ? <Button
          variant="danger"
          //  EXAMPLE FOR HANDLING EVENTS(HERE onClick event is used inside a function which is one of the events)
          onClick={removeFromCart}
        >REMOVE FROM CART</Button> : ""}
 





      </Card.Body>
    </Card>

  )
}