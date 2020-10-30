import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Entete.css";

class Entete extends React.Component {
  render() {
    const { id, nom, description, mode, link } = this.props;

    return (
      <div className={`Entete-${mode}`}>
        <div className={`nom-${mode} tooltipEntete `}>
          <span className="tooltipEnteteId">{id}</span>
          <Link to={`/${link}/${id}`}>{nom}</Link>
          <span className="tooltipEnteteDescription">{description}</span>
        </div>
      </div>
    );
  }
}

export default Entete;
