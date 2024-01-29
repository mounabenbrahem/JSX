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
  const myName = true;
  return (
    <div className="">
      {/* Condition */}
      {myName ? <Card/> : "Welcome"}
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
