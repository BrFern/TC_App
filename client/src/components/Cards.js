import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardDisplay() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/golden_100_cube.png" />
      <Card.Body>
        <Card.Title>Golden Beads</Card.Title>
        <Card.Text>
          A material used to experiment and discover the decimal system of numbers. 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardDisplay;