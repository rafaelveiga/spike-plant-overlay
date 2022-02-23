import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OverlayDataContextProvider from "./contexts/OverlayDataCtx";
import Dashboard from "./dashboard/Dashboard";
import ScreenManager from "./overlay/ScreenManager";

function App() {
  return (
    <OverlayDataContextProvider>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Spike Plant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/overlay">Overlay</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/overlay" element={<ScreenManager />} />
        </Routes>
      </BrowserRouter>
    </OverlayDataContextProvider>
  );
}

export default App;
