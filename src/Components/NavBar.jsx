import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Navbar.Brand href="#home">
            <img src="https://cdn.nba.com/logos/leagues/logo-nba.svg" alt="" />
            {/* Logo  */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Games</Nav.Link>
            <Nav.Link href="#features">Schedule</Nav.Link>
            <Nav.Link href="#pricing">Watch</Nav.Link>
            <Nav.Link href="#pricing">News</Nav.Link>
            <Nav.Link href="#pricing">In-Season Tournament</Nav.Link>
            <Nav.Link href="#pricing">Stats</Nav.Link>
            <Nav.Link href="#pricing">Standings</Nav.Link>
            <Nav.Link href="#pricing">Teams</Nav.Link>
            <Nav.Link href="#pricing">Players</Nav.Link>
            <Nav.Link href="#pricing">Future Starts Now</Nav.Link>
            <Nav.Link href="#pricing">NBA Fitness</Nav.Link>
            <Nav.Link href="#pricing">Fantasy</Nav.Link>
            <Nav.Link href="#pricing">League Pass</Nav.Link>
            <Nav.Link href="#pricing"> Store</Nav.Link>
            <Nav.Link href="#pricing"> Tickets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
