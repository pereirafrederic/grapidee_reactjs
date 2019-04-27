import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Entete.css";

class Entete extends React.Component {
  render() {
    const { id, nom, description, mode, link } = this.props;

    return (
      <div className={`Entete-${mode}`}>
        <div className={`nom-${mode}`}>
          <Link to={`/${link}/${id}`}>{`${id} - ${nom}`}</Link>
        </div>
        <div className={`description-${mode}`}>{description}</div>
      </div>
    );
  }
}

export default Entete;
