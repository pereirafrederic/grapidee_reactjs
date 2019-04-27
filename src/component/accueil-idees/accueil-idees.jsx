import React, { Fragment } from "react";

import IdeesOrphelines from "../idees-orphelines/IdeesOrphelines";

import "./accueil-idees.css";
import { bindActionCreators } from "redux";
import { thunkLoadIdeeMaitres } from "../../redux/thunk/loadMasterSlaveThunk";
import { connect } from "react-redux";
import Idee from "../idee/Idee";
import BarLeft from "../bar-left/BarLeft";

class AccueilIdees extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.load();
  }

  renderIdeesMaitre() {
    if (!this.props.ideesMaitres || !this.props.ideesMaitres.length) {
      return null;
    }

    return (
      <div className="Accueil--maitres">
        {this.props.ideesMaitres.map(idee => {
          return <Idee idee={idee} mode={"verticale"} />;
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="Accueil--idees">
        <BarLeft />
        <div>
          <IdeesOrphelines />
          {this.renderIdeesMaitre()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loadIdeeReducer }) {
  return { ideesMaitres: loadIdeeReducer.maitres };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({ load: thunkLoadIdeeMaitres }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccueilIdees);
