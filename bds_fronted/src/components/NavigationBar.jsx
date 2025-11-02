import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './nav.css';
import Button from 'react-bootstrap/Button';

export function NavigationBar() {
    return (
      <>
          <Navbar style={{ backgroundColor: '#FFFFFF' }} data-bs-theme="light">
      <Container fluid>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://i.postimg.cc/CKWtcfZd/imgblood.png"
            alt="Logo"
            style={{
              height: '50px',
              width: 'auto',
              marginRight: '10px',
            }}
          />
          <Navbar.Brand as={Link} to="/" className="text-danger nav-font"
          style={{ fontWeight: '540', fontSize: '30px' }}>
            Bloodtopiya
          </Navbar.Brand>
        </div>

        
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="text-danger nav-font" style={{ fontWeight: '400', fontSize: '20px' }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact" className="text-danger nav-font" style={{ fontWeight: '400', fontSize: '20px' }}>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className="text-danger nav-font" style={{ fontWeight: '400', fontSize: '20px' }}>
            About
          </Nav.Link>
          <Link to="/Login"  className="btn btn-danger" style={{fontSize:'20px', marginLeft: '10px'}} >Login</Link>
        </Nav>
        {/* <Button as={Link} to="/Login" variant="danger" style={{fontSize:'20px'}}>Login</Button> */}
      </Container>
    </Navbar>
     
    </>
    )
};