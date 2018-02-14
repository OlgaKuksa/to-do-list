import React, { Component } from "react";
import AddTask from "../AddTask";
import { Modal, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import {clearTask} from "../../actions/editedTask"

class EditTaskModal extends Component {
  render() {
    let legend=this.props.editedTask==null||this.props.editedTask=={}?'Add Task':'Save Task';
    return (
      <Modal onClose={this.props.clearTask} open={Boolean(this.props.editedTask)} size='small' closeIcon >
        <AddTask legend={legend} name="EditTaskForm" />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  editedTask: state.editedTask
});

const mapDispatchToProps={
    clearTask
}

export default connect (mapStateToProps, mapDispatchToProps)(EditTaskModal)
