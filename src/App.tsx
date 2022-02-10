import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Jerel Okonski UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ background: "#0000ff" }}>This is my new header</h1>
            <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000164722/www.udel.edu/content/dam/udelImages/main/photography/campus/Memorial_Spring_002.jpg/_jcr_content/renditions/original"
                alt="the green"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ol>
                <li>apples</li>
                <li>oranges</li>
                <li>bananas</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "75px",
                                backgroundColor: "#ff0000"
                            }}
                        >
                            First Col
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "75px",
                                backgroundColor: "#ff0000"
                            }}
                        >
                            Second col{" "}
                        </div>{" "}
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
        </div>
    );
}

export default App;
