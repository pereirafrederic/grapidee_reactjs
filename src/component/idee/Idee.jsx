import React from "react";
import Entete from "../entete/Entete";
import Organisation from "../organisation/Organisation";

import "./Idee.css";
import { mdiGroup, mdiLink, mdiDelete, mdiLinkPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { thunkActionIdee } from "../../redux/thunk/actionElementThunk";
import {
  defineMasterAssoidee,
  defineGrappeAssoIdee,
  addEsclaveAssoIdee
} from "../../redux/actions/assoIdeeIdeeAction";
import { connect } from "react-redux";
import { DELETE } from "../../redux/thunk/utils/methodFetch";
import { bindActionCreators } from "redux";
import IdeeEnfant from "../idee-enfant/IdeeEnfant";

class Idee extends React.Component {
  constructor(props) {
    super(props);
  }

  renderActions() {
    const { idee } = this.props;
    return (
      <div className="primary-idee-actions">
        <Icon
          path={mdiLink}
          size={2}
          horizontal={false}
          vertical={false}
          rotate={0}
          color="green"
          onClick={e => this.props.defineMasterAssoidee(idee)}
        />
        <Icon
          path={mdiLinkPlus}
          size={2}
          horizontal={false}
          vertical
          rotate={180}
          color="yellow"
          onClick={e => this.props.addEsclaveAssoIdee(idee)}
        />
        <Icon
          path={mdiGroup}
          size={2}
          horizontal={true}
          vertical
          rotate={0}
          color="blue"
          onClick={e => this.props.defineIdeeAssoIdeeGrappe(idee)}
        />

        <Icon
          path={mdiDelete}
          size={2}
          horizontal={false}
          vertical
          rotate={180}
          color="red"
          onClick={e => this.props.actionIdee(idee, DELETE)}
        />
      </div>
    );
  }

  render() {
    const { idee, mode } = this.props;

    const modeEntete = mode;

    const modeIdeeEsclaves = mode;
    const modeOrganisation = mode == "verticale" ? "horizontale" : "verticale";
    const modeOrganisationFilles = modeOrganisation;

    return (
      <div className={`primary-Idee borderIdee ${mode}`} key={idee.id}>
        {mode == "horizontale" && (
          <div className="verticale">
            <Entete
              id={idee.id}
              nom={idee.nom}
              description={idee.description}
              mode={modeEntete}
              link={"idee"}
            />
            {this.renderActions()}
          </div>
        )}
        {mode == "verticale" && (
          <Entete
            id={idee.id}
            nom={idee.nom}
            description={idee.description}
            mode={modeEntete}
            link={"idee"}
          />
        )}
        {idee.organisation && (
          <div className={`primary-Idee-organisation ${modeOrganisation}`}>
            {idee.organisation.ideeEsclaves &&
              idee.organisation.ideeEsclaves.length > 0 && (
                <div
                  className={`primary-Idee-ideeEsclaves ${modeIdeeEsclaves}`}
                >
                  {idee.organisation.ideeEsclaves.map(idee => (
                    <IdeeEnfant idee={idee} mode={modeIdeeEsclaves} />
                  ))}
                </div>
              )}
            {idee.organisation.organisationFilles &&
              idee.organisation.organisationFilles.length > 0 && (
                <div
                  className={`primary-Idee-organisationFilles ${modeOrganisationFilles}`}
                >
                  {idee.organisation.organisationFilles.map(grappe => (
                    <Organisation
                      grappe={grappe}
                      mode={modeOrganisationFilles}
                    />
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
      actionIdee: thunkActionIdee,
      defineMasterAssoidee,
      addEsclaveAssoIdee,
      defineGrappeAssoIdee
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Idee);
