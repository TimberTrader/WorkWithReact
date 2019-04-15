import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class WalkDogTodoItem extends React.Component {
  render() {
    return (
      <tr>
        <td>Walk Dog</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  }
}
class BuyBreadTodoItem extends React.Component {
  render() {
    return (
      <tr>
        <td>Buy Bread</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  }
}
class TodoList extends React.Component {
  render() {
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
          <tbody>
            <WalkDogTodoItem />
            <BuyBreadTodoItem />
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, root);
