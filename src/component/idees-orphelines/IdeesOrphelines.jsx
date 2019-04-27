import React from "react";
import Icon from "@mdi/react";
import { connect } from "react-redux";

import {
  mdiPlusCircle,
  mdiLink,
  mdiArrowUpDropCircleOutline,
  mdiArrowDownDropCircleOutline,
  mdiLinkPlus
} from "@mdi/js";

import Entete from "../entete/Entete";

import "./IdeesOrphelines.css";
import { thunkLoadIdeeOrphelines } from "../../redux/thunk/loadMasterSlaveThunk";
import { bindActionCreators } from "redux";
import {
  defineMasterAssoidee,
  addEsclaveAssoIdee
} from "../../redux/actions/assoIdeeIdeeAction";
import CreateIdee from "../create-idee/CreateIdee";

class IdeesOrphelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minIndex: 0,
      maxIndex: 5,
      openCreate: false
    };

    this.diminuerIndex = this.diminuerIndex.bind(this);
    this.augmenterIndex = this.augmenterIndex.bind(this);
    this.handleIdeePopup = this.handleIdeePopup.bind(this);
  }

  componentDidMount() {
    this.props.load();
  }
  diminuerIndex() {
    let newMax = this.state.maxIndex - 5;
    let newMin = this.state.minIndex - 5;
    if (newMin < 0) {
      newMin = 0;
      newMax = 5;
    }

    this.setState({
      minIndex: newMin,
      maxIndex: newMax
    });
  }

  augmenterIndex(taillemax) {
    let newMin = this.state.minIndex + 5;
    let newMax = this.state.maxIndex + 5;
    if (newMax > taillemax) {
      newMin = taillemax - 5;
      newMax = taillemax;
    }

    this.setState({
      minIndex: newMin,
      maxIndex: newMax
    });
  }

  handleIdeePopup() {
    console.log("handleIdeePopup");
    this.setState({
      openCreate: !this.state.openCreate
    });
  }

  renderIdee(idee) {
    return (
      <div className="IdeeOrpheline-idee" key={idee.id}>
        {this.state.openCreate && (
          <CreateIdee handleIdeePopup={this.handleIdeePopup} />
        )}
        <Entete
          id={idee.id}
          nom={idee.nom}
          description={idee.description}
          mode={"verticale"}
          link={"idee"}
        />
        <div className="IdeeOrpheline-actions-horizontale">
          <Icon
            path={mdiLink}
            size={2}
            horizontal={true}
            vertical={false}
            rotate={90}
            color="green"
            onClick={e => this.props.defineMasterAssoidee(idee)}
          />
          <Icon
            path={mdiLinkPlus}
            size={2}
            horizontal={true}
            vertical={false}
            rotate={90}
            color="green"
            onClick={e => this.props.addEsclaveAssoIdee(idee)}
          />
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.ideesOrphelines || !this.props.ideesOrphelines.length) {
      return null;
    }

    return (
      <div className="IdeeOrpheline">
        <div className="IdeeOrpheline-actions-verticale">
          {
            <Icon
              path={mdiPlusCircle}
              size={3}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="green"
              onClick={this.handleIdeePopup}
            />
          }
          {
            <Icon
              path={mdiArrowUpDropCircleOutline}
              size={3}
              horizontal={false}
              vertical={false}
              rotate={0}
              color="dark"
              onClick={() =>
                this.diminuerIndex(this.props.ideesOrphelines.length)
              }
            />
          }

          {
            <Icon
              path={mdiArrowDownDropCircleOutline}
              size={3}
              horizontal={false}
              vertical={false}
              rotate={0}
              color="dark"
              onClick={() =>
                this.augmenterIndex(this.props.ideesOrphelines.length)
              }
            />
          }
        </div>
        {this.props.ideesOrphelines
          .slice(this.state.minIndex, this.state.maxIndex)
          .map(idee => {
            return this.renderIdee(idee);
          })}
      </div>
    );
  }
}

function mapStateToProps({ loadIdeeReducer }) {
  return {
    ideesOrphelines: loadIdeeReducer.orphelines
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    { load: thunkLoadIdeeOrphelines, defineMasterAssoidee, addEsclaveAssoIdee },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeesOrphelines);
