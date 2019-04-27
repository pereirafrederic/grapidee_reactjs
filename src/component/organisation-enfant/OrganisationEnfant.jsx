import React from "react";
import Entete from "../entete/Entete";
import Idee from "../idee/Idee";

import "./OrganisationEnfant.css";
import { mdiLink, mdiGroup, mdiDelete, mdiLinkPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { thunkActionGrappe } from "../../redux/thunk/actionElementThunk";
import { connect } from "react-redux";
import { DELETE } from "../../redux/thunk/utils/methodFetch";
import { bindActionCreators } from "redux";

import {
  defineMasterAssoGrappe,
  addEsclaveAssoGrappe
} from "../../redux/actions/assoGrappeGrappeAction";

import { addGrappeAssoIdeeGrappe } from "../../redux/actions/assoIdeeGrappeAction";
import Organisation from "../organisation/Organisation";

class OrganisationEnfant extends React.Component {
  constructor(props) {
    super(props);
  }

  renderActions() {
    const { grappe } = this.props;
    return (
      <div className="primary-grappe-actions">
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
          horizontal={true}
          vertical
          rotate={0}
          color="green"
          onClick={e => this.props.addEsclaveAssoGrappe(grappe)}
        />
        <Icon
          path={mdiGroup}
          size={2}
          horizontal={false}
          vertical
          rotate={180}
          color="blue"
          onClick={e => this.props.addGrappeAssoIdeeGrappe(grappe)}
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

    const modeEntete = mode == "verticale" ? "horizontale" : "verticale";
    const modeIdeeEsclaves = mode;
    const modeIdee =
      modeIdeeEsclaves == "verticale" ? "horizontale" : "verticale";
    const modeGrappes = mode;
    const modeGrappe = modeGrappes;

    return (
      <div className={`primary-Grappe borderGrappe ${mode}`} key={grappe.id}>
        {mode == "horizontale" && (
          <div className="verticale">
            <Entete
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
            id={grappe.id}
            nom={grappe.nom}
            description={grappe.description}
            mode={modeEntete}
            link={"grappe"}
          />
        )}
        {(grappe.ideeEsclaves || grappe.grappes) && (
          <div className={`primary-Grappe-detail ${mode}`}>
            {grappe.ideeEsclaves && grappe.ideeEsclaves.length > 0 && (
              <div
                className={`primary-Grappe-ideeEsclaves ${modeIdeeEsclaves}`}
              >
                {grappe.ideeEsclaves.map(idee => (
                  <Idee idee={idee} mode={modeIdee} />
                ))}
              </div>
            )}
            {grappe.grappes && grappe.grappes.length > 0 && (
              <div className={`primary-Grappe-grappes ${modeGrappes}`}>
                {grappe.grappes.map(grappe => (
                  <Organisation grappe={grappe} mode={modeGrappe} />
                ))}
              </div>
            )}
          </div>
        )}
        {mode == "verticale" && this.renderActions()}
      </div>
    );
  }
}

function mapStateToProps({}) {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      actionGrappe: thunkActionGrappe,
      defineMasterAssoGrappe,
      addEsclaveAssoGrappe,
      addGrappeAssoIdeeGrappe
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganisationEnfant);
