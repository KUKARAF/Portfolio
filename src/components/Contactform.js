import React, { Component } from "react";
// import Button from "react-bootstrap/Button";

import "./Contactform.css";

class Contactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetAmount: "What's your Budget?",
      prefferedContact: "Email"
    };
    // this.handleSliderChange = this.handleSliderChange.bind(this);
    // this.sliderRef = React.createRef();
    this.contactTypeRef = React.createRef();
    this.nameRef = React.createRef();
    this.contactameRef = React.createRef();
    this.messageRef = React.createRef();
    this.contactMailRef = React.createRef();
    this.contactPhoneRef = React.createRef();
  }
  // handleSliderChange = () => {
  //   let v = this.sliderRef.current.value;
  //   let o = "";
  //   if (20 > v) {
  //     o = "I am broke";
  //   } else if (4500 < v) {
  //     o = "Money is not a problem";
  //   } else {
  //     o = this.sliderRef.current.value + "€";
  //   }
  //
  //   this.setState({ budgetAmount: o });
  //   // this.state.budgetAmount = this.sliderRef.focus();
  // };

  // handleFormSelect = p => {
  //   document.getElementById("mc-email").value = "";
  //   this.setState({ prefferedContact: p });
  // };
  handleSend = e => {
    // e.preventdefault();
    let data = {};
    // data.money = this.sliderRef.current.value;
    data.name = this.nameRef.current.value;
    // data.contactType = this.state.prefferedContact;
    data.contactData = this.contactTypeRef.current.value;
    data.message = this.messageRef.current.value;

    console.log(data);
  };

  render() {
    return (
      <div align="center" className="">
        <form id="mc-form" className="group range-field" method="post">
          <input type="hidden" name="form-name" value="mc-form" />
          <input
            placeholder="Name"
            className=" UserDetails mr-3"
            type="text"
            ref={this.nameRef}
            name="firstname"
          />
          <br />
          <br />

          <input
            type="text"
            className=" UserDetails email"
            placeholder="Email"
            aria-label=""
            aria-describedby="basic-addon1"
            ref={this.contactMailRef}
            id="mc-email"
          />
          <br />
          <br />


          <div
            className="input-group choseButtons"
            role="group"
            aria-label="Basic example"
          />

          <br />

          <textarea
            placeholder="What is the Project all about?"
            rows="10"
            ref={this.messageRef}
            cols="50"
          />

          <br />
          <br />

          <div className="slidecontainer">
            <button
              onClick={() => this.handleSend()}
              type="button"
              className="btn"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contactform;
