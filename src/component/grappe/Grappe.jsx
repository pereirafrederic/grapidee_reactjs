import React from "react";
import { connect } from "react-redux";
import Entete from "../entete/Entete";
import { bindActionCreators } from "redux";

import "./Grappe.css";
import Icon from "@mdi/react";
import { mdiLink, mdiDelete, mdiLinkPlus } from "@mdi/js";
import { thunkActionGrappe } from "../../redux/thunk/actionElementThunk";
import {
  defineMasterAssoGrappe,
  addEsclaveAssoGrappe
} from "../../redux/actions/assoGrappeGrappeAction";

import { DELETE } from "../../redux/thunk/utils/methodFetch";
import GrappeEnfant from "../grappe-enfant/GrappeEnfant";
import Idee from "../idee/Idee";

class Grappe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderActions() {
    const { grappe, actionGrappe, defineMasterAssoGrappe } = this.props;

    console.warn(this.props, actionGrappe, defineMasterAssoGrappe);
    return (
      <div className="primary-idee-actions">
        <Icon
          path={mdiLink}
          size={2}
          horizontal={false}
          vertical={false}
          rotate={0}
          color="green"
          onClick={e => this.props.defineMasterAssoGrappe(grappe)}
        />
        <Icon
          path={mdiLinkPlus}
          size={2}
          horizontal={false}
          vertical
          rotate={180}
          color="green"
          onClick={e => this.props.addEsclaveAssoGrappe(grappe)}
        />
        <Icon
          path={mdiDelete}
          size={2}
          horizontal={false}
          vertical
          rotate={180}
          color="red"
          onClick={e => this.props.actionGrappe(grappe, DELETE)}
        />
      </div>
    );
  }

  render() {
    const { grappe, mode } = this.props;

    const modeEntete = mode;
    const modeIdees = mode;

    const modeGrappeEnfants = mode == "verticale" ? "horizontale" : "verticale";

    return (
      <div className={`primary-grappe borderGrappe ${mode}`} key={grappe.id}>
        {mode == "horizontale" && (
          <div className="verticale">
            <Entete
              key={grappe.id}
              id={grappe.id}
              nom={grappe.nom}
              description={grappe.description}
              mode={modeEntete}
              link={"grappe"}
            />
            {this.renderActions()}
          </div>
        )}
        {mode == "verticale" && (
          <Entete
            key={grappe.id}
            id={grappe.id}
            nom={grappe.nom}
            description={grappe.description}
            mode={modeEntete}
            link={"grappe"}
          />
        )}

        {grappe.idees && grappe.idees.length > 0 && (
          <div className={`primary-grappe-idees ${modeIdees}`}>
            {grappe.idees.map(idee => (
              <Idee key={idee.id} idee={idee} mode={"verticale"} />
            ))}
          </div>
        )}
        {grappe.grappeEnfants && grappe.grappeEnfants.length > 0 && (
          <div className={`primary-grappe-grappeEnfants verticale`}>
            {grappe.grappeEnfants.map(grappe => (
              <GrappeEnfant
                grappe={grappe}
                mode={modeGrappeEnfants}
                key={grappe.id}
              />
            ))}
          </div>
        )}
        {mode == "verticale" && this.renderActions()}
      </div>
    );
  }
}

function mapStateToProps({ loadIdeeReducer }) {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      actionGrappe: thunkActionGrappe,
      defineMasterAssoGrappe,
      addEsclaveAssoGrappe
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grappe);
