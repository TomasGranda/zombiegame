import React from "react";
import { Panel, Nav, NavItem } from "react-bootstrap";
import { changeToInventory, changeToMap, changeToMain } from "../../actions/contentActions";
import { connect } from "react-redux";

const NavMenu = (props) => {
  const content = props.content;
  return (
    <Panel style={{height: "75vh"}}>
      <Panel.Body style={{padding: "0px"}}>
        <Nav bsStyle="pills" stacked activeKey={content}>
          <NavItem eventKey={1} onClick={props.changeToMain}>
            Main
          </NavItem>
          <NavItem eventKey={2} onClick={props.changeToInventory}>
            Inventory
          </NavItem>
          <NavItem eventKey={3} onClick={props.changeToMap}>
            Map
          </NavItem>
        </Nav>
      </Panel.Body>
    </Panel>
  );
};

const mapStateToProps = state => ({
  content: state.content.view
})

export default connect(mapStateToProps, { changeToMain, changeToInventory, changeToMap } )(NavMenu);
