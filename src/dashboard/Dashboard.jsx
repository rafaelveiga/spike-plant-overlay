import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { OverlayDataContext } from "../contexts/OverlayDataCtx";
import ParticipantsForm from "./ParticipantsForm";

const Dashboard = (props, context) => {
  return (
    <OverlayDataContext.Consumer>
      {({ state, setParticipants }) => (
        <Container>
          <Row>
            <Col lg={6}>
              <ParticipantsForm
                onSubmit={(value) => {
                  setParticipants(value);
                }}
              />

              <br />

              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>Tela</Accordion.Header>
                  <Accordion.Body>
                    <Button>Countdown</Button>
                    <Button>Main</Button>
                    <Button>Ad</Button>
                    <Button>Fim</Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      )}
    </OverlayDataContext.Consumer>
  );
};

export default Dashboard;
