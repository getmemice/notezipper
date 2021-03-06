import React from 'react'
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Note Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='m-auto'>
            <Form inline>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-sm-2'
                aria-label='Search'
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to='/mynotes'>My Notes</Link>
            </Nav.Link>
            <NavDropdown title='Jiwon Kim' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
