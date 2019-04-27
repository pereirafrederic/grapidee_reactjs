import React from "react";

import "./BarLeft.css";
import { bindActionCreators } from "redux";
import { thunkLoadIdeeMaitres } from "../../redux/thunk/loadMasterSlaveThunk";
import { connect } from "react-redux";
import SelectionGrappeidee from "../selection-grappe-idee/SelectionGrappeIdee";
import SelectionIdeeIdee from "../selection-idee-idee/SelectionIdeeIdee";
import SelectionGrappeGrappe from "../selection-grappe-grappe/SelectionGrappeGrappe";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import CreateIdee from "../create-idee/CreateIdee";
import Icon from "@mdi/react";
import Select from "react-select";
import { mdiPlusCircle } from "@mdi/js";
import {
  thunkLoadGrappeOptions,
  thunkLoadIdeeOptions
} from "../../redux/thunk/loadElementThunk";

class BarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCreate: false,
      redirectIdee: null,
      redirectGrappe: null
    };
    this.handleIdeePopup = this.handleIdeePopup.bind(this);
    this.handleGotoIdee = this.handleGotoIdee.bind(this);
    this.handleGotoGrappe = this.handleGotoGrappe.bind(this);
  }

  componentDidMount() {
    this.props.loadGrappeOptions();
    this.props.loadIdeeOptions();
    this.setState({ redirectIdee: null, redirectGrappe: null });
  }

  handleIdeePopup() {
    console.log("handleIdeePopup");
    this.setState({
      openCreate: !this.state.openCreate
    });
  }

  handleGotoIdee(selectedIdeeOption) {
    console.log("handleGotoIdee", selectedIdeeOption.value);
    this.setState({
      redirectIdee: selectedIdeeOption.value,
      redirectGrappe: null
    });
  }

  handleGotoGrappe(selectedGrappeOption) {
    console.log("handleGotoGrappe", selectedGrappeOption.value);
    this.setState({
      redirectGrappe: selectedGrappeOption.value,
      redirectIdee: null
    });
  }

  render() {
    const {
      selectedGrappeOption,
      selectedIdeeOption,
      redirectIdee,
      redirectGrappe
    } = this.state;
    const { grappeOptions, ideeOptions } = this.props;

    const url = redirectIdee
      ? "/idee/" + redirectIdee
      : redirectGrappe
      ? "/grappe/" + redirectGrappe
      : "";

    console.log(url);

    return (
      <div className="BarLeft">
        {url.length > 0 && <Redirect to={url} />}

        {this.state.openCreate && (
          <CreateIdee handleIdeePopup={this.handleIdeePopup} />
        )}
        <Link to={`/grappes`}>{`accueil des grappes`}</Link>
        <Link to={`/idees`}>{`accueil des idees`}</Link>

        <div className="titre">Créer une idée</div>
        {
          <Icon
            path={mdiPlusCircle}
            size={2}
            horizontal={true}
            vertical={false}
            rotate={90}
            color="green"
            onClick={this.handleIdeePopup}
          />
        }

        <div className="titre">Raccourci idée</div>
        <Select
          id="gotoidee"
          value={selectedIdeeOption}
          onChange={this.handleGotoIdee}
          options={ideeOptions}
        />
        <div className="titre">Raccourci grappe</div>
        <Select
          id="gotoGrappe"
          value={selectedGrappeOption}
          onChange={this.handleGotoGrappe}
          options={grappeOptions}
        />

        <div className="titre">selections</div>
        <SelectionIdeeIdee />
        <SelectionGrappeidee />
        <SelectionGrappeGrappe />
      </div>
    );
  }
}

function mapStateToProps({ loadGrappeReducer, loadIdeeReducer }) {
  return {
    grappeOptions: loadGrappeReducer.options,
    ideeOptions: loadIdeeReducer.options
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      load: thunkLoadIdeeMaitres,
      loadGrappeOptions: thunkLoadGrappeOptions,
      loadIdeeOptions: thunkLoadIdeeOptions
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarLeft);
