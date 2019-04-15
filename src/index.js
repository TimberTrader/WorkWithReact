import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import tasks from "./tasks.json";

class TodoTaskItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.taskName}</td>
        <td>
          <input type="checkbox" defaultChecked={this.props.finished} />
        </td>
      </tr>
    );
  }
}

class TodoList extends React.Component {
  render() {
    const tasksItems = this.props.tasks.map(taskObj => {
      return (
        <TodoTaskItem taskName={taskObj.taskName} finished={taskObj.finished} />
      );
    });
    return (
      <div className="container">
        <h1>
          Get It Done! <br />
          <small>For the truly industrious</small>
        </h1>
        <table>
          <thead>
            <tr>
              <td>Task</td>
              <td>Done?</td>
            </tr>
          </thead>
          <tbody>{tasksItems}</tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<TodoList tasks={tasks} />, root);
