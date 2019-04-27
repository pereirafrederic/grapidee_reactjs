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
import "./CreateGrappe.css";
import { thunkLoadGrappeOptions } from "../../redux/thunk/loadElementThunk";
import { POST } from "../../redux/thunk/utils/methodFetch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { thunkActionGrappe } from "../../redux/thunk/actionElementThunk";
import loadGrappeReducer from "../../redux/reducers/loadGrappeReducer";

class CreateGrappe extends React.Component {
  constructor(props) {
    super(props);

    let initialSelectedOption = "";
    let initialGrappeSelectionne = null;
    if (this.props.grappeParent) {
      initialSelectedOption = {
        value: this.props.grappeParent.id,
        label: this.props.grappeParent.nom
      };
      initialGrappeSelectionne = this.props.grappeSelectionne;
    }

    this.state = {
      nom: "",
      description: "",
      liaison: "",
      grappeParent: initialGrappeSelectionne,
      selectedOption: initialSelectedOption,
      options: []
    };
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeParent = this.handleChangeparent.bind(this);
    this.annuler = this.annuler.bind(this);
    this.createGrappe = this.createGrappe.bind(this);
  }
  componentDidMount() {
    this.props.loadGrappeOptions();
  }

  handleChangeNom = event => {
    this.setState({ nom: event.target.value });
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleChangeparent = selectedOption => {
    this.setState({ selectedOption });
  };

  createGrappe(event) {
    event.preventDefault();
    let idParent = this.state.selectedOption.value
      ? this.state.selectedOption.value
      : this.props.idParent;

    const bodyGrappe = {
      nom: this.state.nom,
      description: this.state.description,
      idParent
    };

    this.props.actionGrappe(bodyGrappe, POST);
  }

  annuler() {
    let initialSelectedOption = "";
    let initialGrappeSelectionne = null;
    if (this.props.grappeParent) {
      initialSelectedOption = {
        value: this.props.grappeParent.id,
        label: this.props.grappeParent.nom
      };
      initialGrappeSelectionne = this.props.grappeSelectionne;
    }

    this.setState({
      nom: "",
      description: "",
      liaison: "",
      grappeParent: initialGrappeSelectionne,
      selectedOption: initialSelectedOption,
      options: []
    });
    this.props.handleGrappePopup();
  }

  render() {
    const { selectedOption } = this.state;
    const { options } = this.props;
    console.warn(options);
    return (
      <div className="Accueil--modal">
        <div className="Accueil--modal-content">
          <h2>Créer une grappe</h2>
          <Form onSubmit={this.createGrappe}>
            <FormGroup>
              <Label for="nomGrappe">nom</Label>
              <Input
                type="text"
                name="nom"
                id="nomGrappe"
                placeholder="saisir le nom"
                onChange={this.handleChangeNom}
              />
            </FormGroup>
            <FormGroup>
              <Label for="descriptionGrappe">description</Label>
              <Input
                type="textarea"
                name="description"
                id="descriptionGrappe"
                onChange={this.handleChangeDescription}
              />
            </FormGroup>
            <FormGroup>
              <Label for="selectGrappe">rattaché à la grappe </Label>
              <Select
                id="selectGrappe"
                value={selectedOption}
                onChange={this.handleChangeparent}
                options={options}
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

function mapStateToProps({ loadGrappeReducer }) {
  return { options: loadGrappeReducer.options };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      actionGrappe: thunkActionGrappe,
      loadGrappeOptions: thunkLoadGrappeOptions
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGrappe);
/*

*/
