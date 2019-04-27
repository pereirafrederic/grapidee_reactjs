import React from "react";
import { connect } from "react-redux";

import Icon from "@mdi/react";
import { mdiCancel, mdiLink, mdiLinkOff, mdiPlusCircle } from "@mdi/js";

import "./SelectionGrappeGrappe.css";
import { bindActionCreators } from "redux";

import { resetAssoIdee } from "../../redux/actions/assoIdeeIdeeAction";

import { thunkActionPostAssoIdee } from "../../redux/thunk/actionAssoThunk";
import { POST, DELETE } from "../../redux/thunk/utils/methodFetch";

class SelectionGrappeGrappe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.lier = this.lier.bind(this);
    this.delier = this.delier.bind(this);
  }

  /*
  maitre: null,
  grappesEsclaves: [],
  */

  componentDidMount() {}

  lier() {
    const { maitre, grappesEsclaves } = this.props;
    console.log(this.props);
    grappesEsclaves.forEach(grappe => {
      this.props.action({ idMaitre: maitre.id, idEsclave: grappe.id }, POST);
    });
  }

  delier() {
    const { maitre, grappesEsclaves } = this.props;
    grappesEsclaves.forEach(grappe => {
      this.props.action({ idMaitre: maitre.id, idEsclave: grappe.id }, DELETE);
    });
  }

  renderSelectionne() {
    console.log("SelectionGrappeGrappe", this.props);
    const { maitre, grappesEsclaves } = this.props;
    return (
      <div className="SelectionGrappeGrappe renderSelectionne">
        <div className="titre">selection grappe</div>
        {maitre && <div className="master">{maitre.nom}</div>}
        <div className="Accueil--esclaves">
          {grappesEsclaves.map(grappe => {
            return <div className="nom">{`${grappe.nom}`}</div>;
          })}
        </div>

        <div className="actions">
          {grappesEsclaves && maitre && (
            <Icon
              path={mdiLink}
              size={2}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="green"
              onClick={this.lier}
            />
          )}
          {grappesEsclaves && maitre && (
            <Icon
              path={mdiLinkOff}
              size={2}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="orange"
              onClick={this.delier}
            />
          )}
          {(grappesEsclaves.length || maitre) && (
            <Icon
              path={mdiCancel}
              size={2}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="red"
              onClick={this.props.resetAssoIdee}
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

function mapStateToProps({ assoGrappeGrappeReducer }) {
  return {
    ...assoGrappeGrappeReducer
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
)(SelectionGrappeGrappe);
