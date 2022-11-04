import React, { Component } from "react";

class Task extends Component {
  componentToShow() {
    if (this.props.status) {
      return <p>Yay you are done</p>;
    } else if (!this.props.status) {
      return (
        <button onClick={() => this.props.completeTask(this.props.id)}>
          I am done
        </button>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="Task">
        <h2>{this.props.name}</h2>
        <p>Done: {this.props.status.toString()}</p>
        {this.componentToShow()}
      </div>
    );
  }
}
export default Task;
