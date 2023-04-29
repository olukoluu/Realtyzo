import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch, BsHeart } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";

const HeaderNav = () => {
  return (
    <Navbar className=" fixed-top bg-white py-3" expand="lg">
      <Container>
        <Navbar.Brand href="#" className=" fw-bold text-primary">
          Real<span className="text-dark">tyzo</span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto ms-auto my-2 my-lg-0 fw-semibold"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action3">Services</Nav.Link>
            <Nav.Link href="#action4">Property</Nav.Link>
            <Nav.Link href="#action5">Pages</Nav.Link>
            <Nav.Link href="#action6">Blog</Nav.Link>
            <Nav.Link href="#action7">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                <BsSearch />
              </button>
            </div>

            <button className=" border-opacity-25 h-25 btn btn-outline-primary mx-3 text-dark border-dark">
              <BsHeart />
            </button>
            <button className=" border-opacity-25 h-25 btn btn-outline-primary text-dark border-dark">
              <HiOutlineUser />
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
