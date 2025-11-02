import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export function Login() {
  return (
    // 1. Outer Container: Centers the Card vertically and horizontally
    <Container fluid
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh',
        backgroundColor:'#FCECEC',
        margin:'0',
        padding:'0'
        
       }} // minHeight ensures it centers well on the page
    >
      {/* 2. Card Component: Provides the 'border' and structure */}
      <Card style={{ width: '25rem', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        
        {/* Optional: Add a Title */}
        <Card.Title className="text-center text-danger mb-4" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
          Donor Login
        </Card.Title>
        
        {/* 3. Form Wrapper (Important for accessibility and submission) */}
        <Form> 
          {/* Email Field */}
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" required />
          </FloatingLabel>
          
          {/* Password Field */}
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
            <Form.Control type="password" placeholder="Password" required />
          </FloatingLabel>

          {/* Login Button */}
          <div className="d-grid gap-2">
            <Button variant="danger" type="submit" style={{ fontSize: '18px' }}>
              Log In
            </Button>
            <p className="text-center mt-3" style={{ fontSize: '14px' }}>
              Don't have an account? <a href="/register" style={{ color: '#b30000' }}>Register here</a>
            </p>
          </div>
        </Form>
      </Card>
    </Container>
  );
}