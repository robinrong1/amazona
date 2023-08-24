import Spinner from 'react-bootstrap/Spinner';
export default function LoadingBox() {
    return (<Spinner animation="border" role="statux">
        <span className="visally-hidden">Loading...</span>
    </Spinner>)
};