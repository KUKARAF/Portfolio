// import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Accordion from "../components/Accordion";
import Languages from "../components/Languages";

class Skills extends Component {
  state = {
    skills: []
  };

  componentDidMount() {
    fetch("/db.json")
      .then(res => res.json())
      .then(data => this.setState({ skills: data.skills }))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <Languages />
        <Accordion data={this.state.skills} />
      </div>
    );
  }
}

export default Skills;
