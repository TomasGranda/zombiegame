import React, { Component } from "react";
import Main from "../Main/Main";
import Map from "../Map/Map";
import Inventory from "../Inventory/Inventory";
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  Navbar,
  MenuItem,
  Nav,
  NavItem,
  NavDropdown,
  Panel
} from "react-bootstrap";
import NavMenu from "../NavMenu/NavMenu";

class Content extends Component {
  render() {
    return (
      <Grid style={{marginTop: "20px"}}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Row>
          <Col xs={12}>
            <Panel>
              <Panel.Body style={{paddingLeft: "0px", paddingRight: "0px"}}>
                <Grid fluid style={{ height: "75vh"}}>
                  <Row>
                    <Col xs={2}>
                      <NavMenu />
                    </Col>
                    <Col xs={10}>
                      {this.props.content===1 ?
                         <Main /> : (this.props.content===2 ?
                          <Inventory /> : <Map />
                      )}
                    </Col>
                  </Row>
                </Grid>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.view
})

export default connect(mapStateToProps)(Content);
