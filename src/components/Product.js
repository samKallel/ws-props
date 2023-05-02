import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const products = (props) => {
  const HandleName =(title) => alert(`Vous avez cliquer sur ${props.title}`);
  return (

    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.picture} height={300}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={HandleName}>{props.title}</Button>
      </Card.Body>
    </Card>
    </div>
  );
};


export default products
