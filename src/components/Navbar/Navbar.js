import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

export default function Navbar() {
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>About</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Board</Dropdown.Item>
            <Dropdown.Item>Districts</Dropdown.Item>
            <Dropdown.Item>Contact Us</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Resources</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Student Spotlight</Dropdown.Item>
            <Dropdown.Item>Boxed Instruction</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Item>
          <Nav.Link href="/events">Events</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Recognition</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Contests</Dropdown.Item>
            <Dropdown.Item>Evaluations</Dropdown.Item>
            <Dropdown.Item>Awards & Scholarships</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Get Involved</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Student Reps</Dropdown.Item>
            <Dropdown.Item>New Voices</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div class="input-group" className="searchBar">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control" />
          </div>
        </div>
      </Nav>
    </>
  );
}
