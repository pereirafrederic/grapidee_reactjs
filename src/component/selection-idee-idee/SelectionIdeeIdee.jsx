import React from "react";
import { connect } from "react-redux";
import Select from "react-select";

import Icon from "@mdi/react";
import { mdiCancel, mdiLink, mdiLinkOff, mdiPlusCircle } from "@mdi/js";

import "./SelectionIdeeIdee.css";
import { bindActionCreators } from "redux";

import { resetAssoIdee } from "../../redux/actions/assoIdeeIdeeAction";

import {
  thunkLoadGrappeOptions,
  thunkLoadIdeeOptions
} from "../../redux/thunk/loadElementThunk";
import { thunkActionPostAssoIdee } from "../../redux/thunk/actionAssoThunk";
import { POST, DELETE } from "../../redux/thunk/utils/methodFetch";

class SelectionIdeeIdee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.lier = this.lier.bind(this);
    this.delier = this.delier.bind(this);
  }
  /*
  maitre: null,
  ideesEsclaves: [],
  grappe: null,
  */
  componentDidMount() {
    this.props.loadGrappeOptions();
    this.props.loadIdeeOptions();
  }

  lier() {
    const { maitre, ideesEsclaves, grappe } = this.props;
    const {
      selectedGrappeOption,
      selectedIdeeMaitreOption,
      selectedIdeeEsclaveOption
    } = this.state;

    const vraiMaitre = maitre
      ? maitre
      : {
          id: selectedIdeeMaitreOption.value,
          nom: selectedIdeeMaitreOption.label
        };
    const vraiEsclaves =
      ideesEsclaves.length > 0
        ? ideesEsclaves
        : [
            {
              id: selectedIdeeEsclaveOption.value,
              nom: selectedIdeeEsclaveOption.label
            }
          ];
    const vraiGrappe = grappe
      ? grappe
      : selectedGrappeOption
      ? {
          id: selectedGrappeOption.value,
          nom: selectedGrappeOption.label
        }
      : null;

    console.log(vraiMaitre, grappe, selectedGrappeOption, vraiGrappe);
    vraiEsclaves.forEach(esclave => {
      if (vraiGrappe) {
        this.props.action(
          {
            idMaitre: vraiMaitre.id,
            idEsclave: esclave.id,
            idGrappe: vraiGrappe.id
          },
          POST
        );
      } else {
        this.props.action(
          { idMaitre: vraiMaitre.id, idEsclave: esclave.id, idGrappe: null },
          POST
        );
      }
    });
  }

  delier() {
    console.log("delier");
    const { maitre, ideesEsclaves, grappe } = this.props;
    ideesEsclaves.forEach(esclave => {
      if (grappe)
        this.props.action(
          { idMaitre: maitre.id, idEsclave: esclave.id, idGrappe: grappe.id },
          DELETE
        );
      else
        this.props.action(
          { idMaitre: maitre.id, idEsclave: esclave.id, idGrappe: null },
          DELETE
        );
    });
  }

  handleChangeIdeeMaitre = selectedIdeeMaitreOption => {
    this.setState({
      selectedIdeeMaitreOption
    });
  };
  handleChangeIdeeEsclave = selectedIdeeEsclaveOption => {
    this.setState({
      selectedIdeeEsclaveOption
    });
  };

  handleChangeGrappe = selectedGrappeOption => {
    this.setState({ selectedGrappeOption });
  };

  renderSelectionne() {
    console.log("SelectionIdeeIdee", this.props);
    const { maitre, ideesEsclaves, grappe } = this.props;
    const {
      selectedGrappeOption,
      selectedIdeeMaitreOption,
      selectedIdeeEsclaveOption
    } = this.state;
    const { grappeOptions, ideeOptions } = this.props;

    return (
      <div className="SelectionIdeeIdee renderSelectionne">
        <div className="titre">Selections Idee</div>

        {maitre && <div className="master">{maitre.nom}</div>}
        {selectedIdeeMaitreOption && (
          <div className="master">{selectedIdeeMaitreOption.label}</div>
        )}
        {!maitre && !selectedIdeeMaitreOption && (
          <Select
            id="selectIdeeMaitre"
            value={selectedIdeeMaitreOption}
            onChange={this.handleChangeIdeeMaitre}
            options={ideeOptions}
          />
        )}
        <div className="Accueil--esclaves">
          {ideesEsclaves.map(esclave => {
            return <div className="nom">{`${esclave.nom}`}</div>;
          })}
          {selectedIdeeEsclaveOption && (
            <div className="nom">{selectedIdeeEsclaveOption.label}</div>
          )}
          {!ideesEsclaves.length && !selectedIdeeEsclaveOption && (
            <Select
              id="selectIdeeEsclave"
              value={selectedIdeeEsclaveOption}
              onChange={this.handleChangeIdeeEsclave}
              options={ideeOptions}
            />
          )}
        </div>
        <div className="Accueil--grappe">
          {grappe && <div className="nom">{`${grappe.nom}`}</div>}
          {selectedGrappeOption && (
            <div className="nom">{selectedGrappeOption.label}</div>
          )}
          {!grappe && !selectedGrappeOption && (
            <Select
              id="selectGrappe"
              value={selectedGrappeOption}
              onChange={this.handleChangeGrappe}
              options={grappeOptions}
            />
          )}
        </div>

        <div className="actions">
          {(ideesEsclaves || selectedIdeeEsclaveOption) &&
            (maitre || selectedIdeeMaitreOption) && (
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
          {(ideesEsclaves || selectedIdeeEsclaveOption) &&
            (maitre || selectedIdeeMaitreOption) && (
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
          {ideesEsclaves ||
            selectedIdeeEsclaveOption ||
            ((maitre || selectedIdeeMaitreOption) && (
              <Icon
                path={mdiCancel}
                size={2}
                horizontal={true}
                vertical={false}
                rotate={90}
                color="red"
                onClick={this.props.resetAssoIdee}
              />
            ))}
        </div>
      </div>
    );
  }

  render() {
    return <div className="SelectionGrapidee">{this.renderSelectionne()}</div>;
  }
}

function mapStateToProps({
  assoIdeeIdeeReducer,
  loadGrappeReducer,
  loadIdeeReducer
}) {
  return {
    ...assoIdeeIdeeReducer,
    grappeOptions: loadGrappeReducer.options,
    ideeOptions: loadIdeeReducer.options
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      action: thunkActionPostAssoIdee,
      resetAssoIdee,
      loadGrappeOptions: thunkLoadGrappeOptions,
      loadIdeeOptions: thunkLoadIdeeOptions
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionIdeeIdee);
