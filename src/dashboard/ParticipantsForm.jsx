import { FieldArray, Form, Formik } from "formik";
import {
  Accordion,
  Button,
  Card,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Stack,
} from "react-bootstrap";

const ParticipantsForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        participants: [],
      }}
      onSubmit={(values) => {
        onSubmit(values.participants);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form>
          <Card>
            <Card.Header>
              <Stack direction="horizontal" gap={3}>
                Participantes
                <Button
                  className="ms-auto"
                  onClick={handleSubmit}
                  variant="success"
                  type="submit"
                >
                  Salvar
                </Button>
              </Stack>
            </Card.Header>
            <Card.Body>
              <Accordion>
                <FieldArray
                  name="participants"
                  render={(arrayHelpers) => (
                    <>
                      {values.participants &&
                        values.participants.length > 0 &&
                        values.participants.map((participant, index) => (
                          <>
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header>
                                {participant.name || "Novo Participante"}
                              </Accordion.Header>
                              <Accordion.Body>
                                <Row>
                                  <Col>
                                    <FormGroup className="mb-3">
                                      <FormLabel>Nome</FormLabel>
                                      <FormControl
                                        value={participant.name}
                                        onChange={handleChange}
                                        name={`participants.${index}.name`}
                                        type="text"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col>
                                    <FormGroup className="mb-3">
                                      <FormLabel>Twitter</FormLabel>
                                      <FormControl
                                        value={participant.twitter}
                                        onChange={handleChange}
                                        name={`participants.${index}.twitter`}
                                        type="text"
                                      />
                                    </FormGroup>
                                  </Col>

                                  <Col>
                                    <FormGroup className="mb-3">
                                      <FormLabel>Imagem</FormLabel>
                                      <FormControl
                                        value={participant.image}
                                        onChange={handleChange}
                                        name={`participants.${index}.image`}
                                        type="text"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>

                                <Button
                                  fluid
                                  block
                                  variant="danger"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remover
                                </Button>
                              </Accordion.Body>
                            </Accordion.Item>
                          </>
                        ))}
                      <hr />
                      <Button
                        onClick={() =>
                          arrayHelpers.push({
                            name: "",
                            twitter: "",
                            image: "",
                          })
                        }
                        variant="success"
                      >
                        Adicionar Participante
                      </Button>
                    </>
                  )}
                />
              </Accordion>
            </Card.Body>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default ParticipantsForm;
