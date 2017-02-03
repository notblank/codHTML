import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import Task from './Task.jsx';

import { Tasks } from '../api/tasks.js'
 
// App component - represents the whole app
class App extends Component {
 
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    console.log(this.props.tasks);
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}


App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
