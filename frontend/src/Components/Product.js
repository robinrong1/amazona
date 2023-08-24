import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
function Product(props){
    const { product } = props;
return (
    <Card >
              
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name} />
              </Link>
              <card-body>
              <Link to={`/product/${product.slug}`}>
                  <Card.Title>{product.name}</Card.Title>
                </Link> 
                <Rating rating = {product.rating} numReviews={product.numReviews}/> 
                <Card.Text>{product.price}</Card.Text>
                <Button>Add to Cart</Button>
              </card-body>
             
            </Card>
)
}
export default Product;