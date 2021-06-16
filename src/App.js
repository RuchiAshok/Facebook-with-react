import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState } from 'react';
import {Table,Toast, Spinner,ProgressBar,Tooltip, OverlayTrigger,Popover,Navbar, FormControl,Nav,Modal,Image,Form, Alert,Button,Collapse,Container,Row,Col,Accordion,Card,Badge,Breadcrumb,ButtonGroup,DropdownButton,Dropdown } from 'react-bootstrap';


function App() {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [open, setOpen] = useState(false);
  


  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  return (
    <div style={{padding:"25px"}}>

        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <br />

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>

        <br />

        <ProgressBar animated now={45} />
        <br />
        <br />
        <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar animated striped variant="danger" now={10} key={3} />
        </ProgressBar>

        <br />
        <br />

        <Row>
            <Col xs={6}>
              <Toast onClose={() => setShow3(false)} show={show3} delay={3000} autohide>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
              </Toast>
            </Col>
            <Col xs={6}>
              <Button onClick={() => setShow3(true)}>Show Toast</Button>
            </Col>
          </Row>
          <br />
          <br />

        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>

        <br />
        <br />
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          
        </Breadcrumb>

         <br />
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>

        <br />
        <br />
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
          <span className="d-inline-block">
            <Button disabled style={{ pointerEvents: 'none' }}>
              Disabled button
            </Button>
          </span>
        </OverlayTrigger>

        <br />
        <br />

          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show2} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <br />
        <Button variant="primary" size="lg" active>
          Primary button
        </Button>{' '}
        <Button variant="secondary" size="lg" active>
          Button
        </Button>

        <br />
        <br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        <br />

        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <br />

        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>

          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <br />
        
        <Container fluid>
            <Row>
              <Col>1 of 2</Col>
              <Col><Image style={{width:"50px"}} src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" roundedCircle /></Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
        </Container>

        <br />

        <Button variant="primary">
          Profile <Badge variant="light">129</Badge>
          <span className="sr-only">unread messages</span>
        </Button>

        <br />
        <br />

        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            click
          </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>

        <br />
        <br />

        <Alert variant="danger">
          This is a danger alert—check it out!
        </Alert>

        <br />

        <Alert show={show1} variant="danger" onClose={() => setShow1(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>

      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

      <br />
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </div>
  );
}

export default App;
