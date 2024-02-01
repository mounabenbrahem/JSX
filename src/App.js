import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './components/Image';

function App() {
  const myName = "";
  return (
    <div className="">
      {/* Condition */}
      {myName ? <div><h1>Hello {myName}</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsGZu7cv6cp7Pi8i6vX6zflA9r9M2aIv2lw&usqp=CAU" alt="" /></div> : <h1>Hello, there!</h1>}
      {/* Image */}
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Image />
      {/* Name */}
        <Card.Title><Name /></Card.Title>
        {/* Price */}
        <Card.Title><Price /></Card.Title>
        {/* Description */}
        <Card.Text>
        <Description />
        </Card.Text>
        <Button variant="primary">ADD</Button>
      </Card.Body>
    </Card>
    {/* Message */}
    <h3>Welcome</h3>
    </div>
  );
}
export default App;
