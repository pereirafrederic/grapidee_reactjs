import React from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import Select from "react-select";

import "./CreateIdee.css";
import { thunkActionIdee } from "../../redux/thunk/actionElementThunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  thunkLoadGrappeOptions,
  thunkLoadIdeeOptions
} from "../../redux/thunk/loadElementThunk";
import { POST } from "../../redux/thunk/utils/methodFetch";

class CreateIdee extends React.Component {
  constructor(props) {
    super(props);

    let initialSelectedOption = null;
    let initialGrappeSelectionne = null;
    if (this.props.grappeSelectionne) {
      initialSelectedOption = {
        value: this.props.grappeSelectionne.id,
        label: this.props.grappeSelectionne.nom
      };
      initialGrappeSelectionne = this.props.grappeSelectionne;
    }

    this.state = {
      nom: "",
      description: "",
      liaison: "",
      idGrappe: null,
      nomMaitre: this.props.nomMaitre ? this.props.nomMaitre : null,
      grappeSelectionne: initialGrappeSelectionne,
      selectedGrappeOption: initialSelectedOption,
      selectedIdeeOption: null,
      options: []
    };
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeGrappe = this.handleChangeGrappe.bind(this);
    this.annuler = this.annuler.bind(this);
    this.createIdee = this.createIdee.bind(this);
  }
  componentDidMount() {
    this.props.loadGrappeOptions();
    this.props.loadIdeeOptions();
  }

  handleChangeNom = event => {
    this.setState({ nom: event.target.value });
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleChangeGrappe = selectedGrappeOption => {
    this.setState({ selectedGrappeOption });
  };
  handleChangeIdeeMaitre = selectedIdeeOption => {
    this.setState({
      selectedIdeeOption
    });
  };

  createIdee(event) {
    event.preventDefault();
    let idGrappe = this.state.selectedGrappeOption
      ? this.state.selectedGrappeOption.value
      : null;

    const idIdeeMaitre = this.state.selectedIdeeOption
      ? this.state.selectedIdeeOption.value
      : null;
    const bodyIdee = {
      nom: this.state.nom,
      description: this.state.description,
      idIdeeMaitre,
      idGrappe
    };

    this.props.actionidee(bodyIdee, POST);
  }

  annuler() {
    let initialSelectedOption = "";
    let initialGrappeSelectionne = null;
    if (this.props.grappeSelectionne) {
      initialSelectedOption = {
        value: this.props.grappeSelectionne.id,
        label: this.props.grappeSelectionne.nom
      };
      initialGrappeSelectionne = this.props.grappeSelectionne;
    }

    this.setState({
      nom: "",
      description: "",
      liaison: "",
      idGrappe: null,
      idIdeeMaitre: this.props.idIdeeMaitre ? this.props.idIdeeMaitre : null,
      nomMaitre: this.props.nomMaitre ? this.props.nomMaitre : null,
      grappeSelectionne: initialGrappeSelectionne,
      selectedGrappeOption: initialSelectedOption,
      selectedIdeeOption: null,
      options: []
    });
    this.props.handleIdeePopup();
  }

  render() {
    const { selectedGrappeOption, selectedIdeeOption } = this.state;
    const { grappeOptions, ideeOptions } = this.props;

    return (
      <div className="Accueil--modal">
        <div className="Accueil--modal-content">
          <h2>Créer une idée</h2>
          <Form onSubmit={this.createIdee}>
            <FormGroup>
              <Label for="nomIdee">nom</Label>
              <Input
                type="text"
                name="nom"
                id="nomIdee"
                placeholder="saisir le nom"
                onChange={this.handleChangeNom}
              />
            </FormGroup>
            {
              <FormGroup>
                <Label for="selectIdeeMaitre">lie à</Label>
                <Select
                  id="selectIdeeMaitre"
                  value={selectedIdeeOption}
                  onChange={this.handleChangeIdeeMaitre}
                  options={ideeOptions}
                />
              </FormGroup>
            }

            {this.state.selectedIdeeOption && (
              <FormGroup>
                <Label for="liaisonIdee">liaison</Label>
                <Input
                  type="text"
                  name="liaison"
                  id="liaisonIdee"
                  placeholder={`saisir un texte qui lie à ${
                    this.state.nomMaitre
                  }`}
                  onChange={this.handleChangeLiaison}
                />
              </FormGroup>
            )}

            <FormGroup>
              <Label for="descriptionIdee">description</Label>
              <Input
                type="textarea"
                name="description"
                id="descriptionIdee"
                onChange={this.handleChangeDescription}
              />
            </FormGroup>
            <FormGroup>
              <Label for="selectGrappe">grouper par</Label>
              <Select
                id="selectGrappe"
                value={selectedGrappeOption}
                onChange={this.handleChangeGrappe}
                options={grappeOptions}
              />
            </FormGroup>
            <div className="form-actions">
              <Button type="submit">valider</Button>
              <Button onClick={this.annuler}>annuler</Button>
            </div>
          </Form>
        </div>
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
      actionidee: thunkActionIdee,
      loadGrappeOptions: thunkLoadGrappeOptions,
      loadIdeeOptions: thunkLoadIdeeOptions
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIdee);

/*

*/
