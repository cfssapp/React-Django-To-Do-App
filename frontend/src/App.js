import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      activeItem: {
        id:null,
        title:'',
        completed:false,
      },
      editing:false,
    }
    this.fetchTasks = this.fetchTasks.bind(this)
  };

  componentWillMount() {
    this.fetchTasks()
  }

  fetchTasks() {
    console.log('Fetching...')

    fetch('http://127.0.0.1:8000/api/task-list/')
    .then(response => response.json())
    .then(data => 
      // console.log('Data:', data))
      this.setState({
        todoList: data
      }))
  }

  render() {
    var tasks = this.state.todoList
    return (
      <div className="container">
        <div id="task-container">

          <div id="form-wrapper">
            <form onSubmit="" id="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input onChange="" className="form-control" id="title" value="" type="text" name="title" placeholder="Add task.." />
                </div>

                <div style={{ flex: 1 }}>
                  <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                </div>
              </div>
            </form>
          </div>

          <div id="list-wrapper">
            {tasks.map(function (task, index) {
              return (
                <div key={index} className="task-wrapper flex-wrapper">
                  <span>{task.title}</span>
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    )
  }
}

export default App;



