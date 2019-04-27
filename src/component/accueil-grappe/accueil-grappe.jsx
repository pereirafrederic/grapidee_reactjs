import React from "react";

import { connect } from "react-redux";
import "./accueil-grappe.css";
import { thunkLoadGrappeMaitres } from "../../redux/thunk/loadMasterSlaveThunk";
import { bindActionCreators } from "redux";
import GrappesOrphelines from "../grappes-orphelines/GrappesOrphelines";
import Grappe from "../grappe/Grappe";
import BarLeft from "../bar-left/BarLeft";
import { thunkLoadGrappe } from "../../redux/thunk/loadElementThunk";

class AccueilGrappe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.props.load(this.props.match.params.id);
    }
  }
  render() {
    const { grappe } = this.props;

    if (!grappe) return null;
    return (
      <div className="AccueilGrappes">
        <BarLeft />
        <div>
          <Grappe grappe={grappe} mode={"verticale"} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loadGrappeReducer }) {
  return {
    grappe: loadGrappeReducer.grappe
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      load: thunkLoadGrappe
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccueilGrappe);
