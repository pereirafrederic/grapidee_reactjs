import React from "react";

import "./accueil.css";
import GrappesOrphelines from "../grappes-orphelines/GrappesOrphelines";
import IdeesOrphelines from "../idees-orphelines/IdeesOrphelines";
import Grappe from "../grappe/Grappe";
import BarLeft from "../bar-left/BarLeft";

class Accueil extends React.Component {
  render() {
    return (
      <div className="Accueil">
        <BarLeft />
      </div>
    );
  }
}

export default Accueil;
