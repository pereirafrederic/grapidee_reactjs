import React from "react";
import { connect } from "react-redux";

import Icon from "@mdi/react";
import { mdiCancel, mdiLink, mdiLinkOff, mdiPlusCircle } from "@mdi/js";

import "./SelectionGrappeIdee.css";
import { bindActionCreators } from "redux";

import { resetAssoIdee } from "../../redux/actions/assoIdeeIdeeAction";

import { thunkActionPostAssoIdee } from "../../redux/thunk/actionAssoThunk";

class SelectionGrappeIdee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*
  idee: null,
  grappes: [],
  */
  componentDidMount() {}

  renderSelectionne() {
    console.log("SelectionGrappeIdee", this.props);
    return (
      <div className="SelectionGrappeIdee renderSelectionne">
        <div className="titre">{"selections grappe <-> idee"}</div>
        {this.props.idee && <div className="master">{this.props.idee.nom}</div>}
        <div className="Accueil--esclaves">
          {this.props.grappes.map(grappe => {
            return <div className="nom">{`${grappe.nom}`}</div>;
          })}
        </div>

        <div className="actions">
          {this.props.grappes && this.props.idee && (
            <Icon
              path={mdiLink}
              size={2}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="green"
              onClick={this.props.action({})}
            />
          )}
          {this.props.grappes && this.props.idee && (
            <Icon
              path={mdiLinkOff}
              size={2}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="orange"
              onClick={this.props.action({})}
            />
          )}
          {(this.props.grappes.length || this.props.idee) && (
            <Icon
              path={mdiCancel}
              size={2}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="red"
              onClick={this.props.resetAssoIdee({})}
            />
          )}
        </div>
      </div>
    );
  }

  render() {
    return <div className="SelectionGrapidee">{this.renderSelectionne()}</div>;
  }
}

function mapStateToProps({ assoIdeeGrappeReducer }) {
  return {
    ...assoIdeeGrappeReducer
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    { action: thunkActionPostAssoIdee, resetAssoIdee },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionGrappeIdee);
