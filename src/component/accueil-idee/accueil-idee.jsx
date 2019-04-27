import React from "react";

import "./accueil-idee.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Idee from "../idee/Idee";
import BarLeft from "../bar-left/BarLeft";
import { thunkLoadIdee } from "../../redux/thunk/loadElementThunk";

class AccueilIdee extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("AccueilIdee-componentDidMount");
    this.props.load(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.props.load(this.props.match.params.id);
    }
  }
  render() {
    const { idee } = this.props;
    console.log(idee);

    if (!idee) return null;

    return (
      <div className="Accueil--idees">
        <BarLeft />
        <div>
          <Idee idee={idee} mode={"verticale"} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loadIdeeReducer }) {
  return { idee: loadIdeeReducer.idee };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators({ load: thunkLoadIdee }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccueilIdee);
