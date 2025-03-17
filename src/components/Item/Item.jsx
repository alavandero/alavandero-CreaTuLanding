import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Item.css';

function Item ({ producto }) {
    return (
      <Col xs={6} md={4} lg={3} className="mb-3">
        <Card className="h-100">
          <Card.Img variant="top" src={producto.image} />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>
              ${producto.category}
            </Card.Text>
            <Card.Text>
              ${producto.description}
            </Card.Text>
              <Button as={Link} to={`/item/${producto.id}`}> ver mas</Button>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Item;
