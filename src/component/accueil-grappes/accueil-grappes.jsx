import React from "react";

import { connect } from "react-redux";
import "./accueil-grappes.css";
import { thunkLoadGrappeMaitres } from "../../redux/thunk/loadMasterSlaveThunk";
import { bindActionCreators } from "redux";
import GrappesOrphelines from "../grappes-orphelines/GrappesOrphelines";
import Grappe from "../grappe/Grappe";
import BarLeft from "../bar-left/BarLeft";

class AccueilGrappes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.load();
  }
  renderGrappesMaitres() {
    if (!this.props.grappesMaitres || !this.props.grappesMaitres.length) {
      return <div>{"aucune grappe"}</div>;
    }

    return (
      <div className="AccueilGrappes--maitres">
        {this.props.grappesMaitres.map(grappe => {
          return <Grappe grappe={grappe} key={grappe.id} />;
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="AccueilGrappes">
        <BarLeft />
        <div>
          <GrappesOrphelines />
          {this.renderGrappesMaitres()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loadGrappeReducer }) {
  return {
    grappesMaitres: loadGrappeReducer.maitres
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      load: thunkLoadGrappeMaitres
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccueilGrappes);
