import React, { Component } from "react";
import LinkPart from "../components/LinkPart";
// import Button from "react-bootstrap/Button";

class Link extends Component {
  state = {
    contactLinks: [],
    loading: true
  };

  //    oldLink = "https://donomar.com/wp-json/wp/v2/posts",
  //
  componentDidMount() {
    fetch(window.location.origin + "/db.json")
      .then(res => res.json())
      .then(contactLinks => this.setState({ contactLinks, loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div align="center">
            <div className="spinner-border m-5 middleOfScreen" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className=" card-rows">
            {this.state.contactLinks.contactLinks.map((item, key) => (
              <LinkPart key={key} data={item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Link;
