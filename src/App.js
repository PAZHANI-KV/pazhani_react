import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Cards } from './components/Cards';

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




 