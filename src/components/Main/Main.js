import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import imagen from "../../assets/Imagen.jpg";

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      img: null
    }
  }
  componentDidMount(){
    const w = this.getWidth();
    const h = this.getHeight();
    this.setState({
      img: <img alt="mapa" src={imagen} style={{width: w}} />
    });
  }
  getWidth(){
    return document.getElementById("Main").offsetWidth;
  }
  getHeight(){
    return document.getElementById("Main").offsetHeight;
  }
  render() {
    return (
      <Panel style={{ height: "75vh" }}>
        <Panel.Heading>Main View</Panel.Heading>
        <Panel.Body id="Main" style={{ padding: "0px" }}>
          {this.state.img ? this.state.img : ''}
        </Panel.Body>
      </Panel>
    );
  }
}

export default Main;
