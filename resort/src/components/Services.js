import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "hi there this is a sample test which i am taking as lorem isnt working"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "hi there this is a sample test which i am taking as lorem isnt working"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "hi there this is a sample test which i am taking as lorem isnt working"
      },
      {
        icon: <FaBeer />,
        title: "strongest Beer",
        info:
          "hi there this is a sample test which i am taking as lorem isnt working"
      }
    ]
  };
  render() {
    return (
      <div>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
