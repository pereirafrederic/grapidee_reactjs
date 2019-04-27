import React from "react";
import Icon from "@mdi/react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  mdiPlusCircle,
  mdiLink,
  mdiArrowUpDropCircleOutline,
  mdiArrowDownDropCircleOutline,
  mdiLinkPlus
} from "@mdi/js";
import CreateGrappe from "../create-grappe/CreateGrappe";

import Entete from "../entete/Entete";

import "./GrappesOrphelines.css";

import {
  defineMasterAssoGrappe,
  addEsclaveAssoGrappe
} from "../../redux/actions/assoGrappeGrappeAction";
import { thunkLoadGrappeOrphelines } from "../../redux/thunk/loadMasterSlaveThunk";

class GrappesOrphelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minIndex: 0,
      maxIndex: 5,
      openCreate: false
    };

    this.diminuerIndex = this.diminuerIndex.bind(this);
    this.augmenterIndex = this.augmenterIndex.bind(this);
    this.handleGrappePopup = this.handleGrappePopup.bind(this);
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
  handleGrappePopup() {
    this.setState({
      openCreate: !this.state.openCreate
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

  renderGrappe(grappe) {
    return (
      <div className="GrappesOrphelines-grappe" key={grappe.id}>
        {this.state.openCreate && (
          <CreateGrappe handleGrappePopup={this.handleGrappePopup} />
        )}
        <Entete
          id={grappe.id}
          nom={grappe.nom}
          description={grappe.description}
          mode={"verticale"}
          link={"grappe"}
        />
        <div className="GrappesOrphelines-actions-horizontale">
          <Icon
            path={mdiLink}
            size={2}
            horizontal={true}
            vertical={false}
            rotate={90}
            color="green"
            onClick={e => this.props.defineMasterAssoGrappe(grappe)}
          />
          <Icon
            path={mdiLinkPlus}
            size={2}
            horizontal={true}
            vertical={false}
            rotate={90}
            color="green"
            onClick={e => this.props.addEsclaveAssoGrappe(grappe)}
          />
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.grappesOrphelines || !this.props.grappesOrphelines.length) {
      return null;
    }

    return (
      <div className="GrappesOrphelines">
        <div className="GrappesOrphelines-actions-verticale">
          {
            <Icon
              path={mdiPlusCircle}
              size={3}
              horizontal={true}
              vertical={false}
              rotate={90}
              color="green"
              onClick={this.handleGrappePopup}
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
                this.diminuerIndex(this.props.grappesOrphelines.length)
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
                this.augmenterIndex(this.props.grappesOrphelines.length)
              }
            />
          }
        </div>
        {this.props.grappesOrphelines
          .slice(this.state.minIndex, this.state.maxIndex)
          .map(grappe => {
            return this.renderGrappe(grappe);
          })}
      </div>
    );
  }
}

function mapStateToProps({ loadGrappeReducer }) {
  return {
    grappesOrphelines: loadGrappeReducer.orphelines
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      load: thunkLoadGrappeOrphelines,
      defineMasterAssoGrappe,
      addEsclaveAssoGrappe
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrappesOrphelines);
