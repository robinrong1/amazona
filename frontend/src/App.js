
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen.js"
import ProductScreen from "./screens/ProductScreen.js"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header >
       <Navbar bg="dark" variant="dark">
        <Container className="mt-3">
          <LinkContainer to="/">
            <Navbar.Brand>amazona</Navbar.Brand>
          </LinkContainer>
        </Container>
       </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        </Container>
       
      </main>
      <footer>
       <div className="text-center"> All rights reserved </div> 
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
