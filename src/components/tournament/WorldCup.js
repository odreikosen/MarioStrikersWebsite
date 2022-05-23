import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import './Tournament.css'

const style = {
    paddingBottom : "30px"
}

const WorldCup = () => {
    return (
        <div className="tourney-container">
        <h1 style={style}>World Cup</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
<Row>
<Col sm={3}>
  <Nav variant="pills" className="flex-column">
    <Nav.Item>
      <Nav.Link eventKey="first">Results</Nav.Link>
    </Nav.Item>
  </Nav>
</Col>
<Col sm={9} className="tourney-results">
  <Tab.Content>
    <Tab.Pane eventKey="first">
    <iframe src="https://challonge.com/6i665vr0/module" width="100%" height="1000" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
    </Tab.Pane>
    </Tab.Content>
    </Col>
    </Row>
    </Tab.Container>
    </div>
    )
}
export default WorldCup;