import Particles from "react-particles-js";
import React, { Component } from "react";
import "./particleContainerStyles.css";
class ParticleContainer extends Component {
  render() {
    const styles = {
      root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        height: "100%",
        background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    };
    return (
      <div className="partiContainer" style={styles.root}>
        <Particles
          params={{
            fps_limit: 28,
            particles: {
              number: {
                value: 200,
                density: {
                  enable: false
                }
              },
              line_linked: {
                enable: true,
                distance: 30,
                opacity: 0.4
              },
              color: {},
              move: {
                speed: 1
              },
              opacity: {
                anim: {
                  enable: true,
                  opacity_min: 0.05,
                  speed: 2,
                  sync: false
                },
                value: 0.4
              }
            },
            polygon: {
              enable: true,
              scale: 0.5,
              type: "inline",
              move: {
                radius: 10
              },
              url: "http://localhost:3000/imgs/deer.svg",
              inline: {
                arrangement: "equidistant"
              },
              draw: {
                enable: true,
                stroke: {
                  color: "rgba(1, 1, 0, .2)"
                }
              }
            },
            retina_detect: false,
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                }
              },
              modes: {
                bubble: {
                  size: 6,
                  distance: 40
                }
              }
            }
          }}
        />
      </div>
    );
  }
}
export default ParticleContainer;
