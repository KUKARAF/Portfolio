// import Button from "react-bootstrap/Button";
import React, { Component } from "react";
// import data from "../db";
import Card from "../components/Card";

class Portfolio extends Component {
  state = {
    posts: [],
    loading: true
  };

  //    oldLink = "https://donomar.com/wp-json/wp/v2/posts",
  //
  componentDidMount() {
    fetch(window.location.origin + "/db.json")
      .then(res => res.json())
      .then(posts => this.setState({ posts, loading: false }));
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          {this.state.loading ? (
            <div align="center">
              <div className="spinner-border m-5 middleOfScreen" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="card-columns">
              {this.state.posts.projects.map((item, key) => (
                <Card key={key} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
