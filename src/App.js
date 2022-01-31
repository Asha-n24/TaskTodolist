
import './App.css';
import './style/style.css'
import React from 'react'
import { Table } from 'reactstrap'
import { Input } from './Components/input'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      List: '',
      ToDoList: []
    }
  }

  handleChange = async (e) => {
    console.log(e.target.value)
    let list;
    list = e.target.value
    await this.setState({ List: list })
  }

  CreateList = async () => {
    let ToDo = [...this.state.ToDoList]
    if (this.state.List != '') {
      ToDo.push(this.state.List)
    }
    await this.setState({ ToDoList: ToDo })
  }
  RemoveAllData = async (e, index, value) => {
    console.log(index, value)
    if (e.target.checked == true) {
      document.getElementById(`listvalue${index}`).style.textDecoration = "line-through"
    } else {
      document.getElementById(`listvalue${index}`).style.textDecoration = "none"

    }

  }

  RemoveData = async (value, index) => {
    let RemoveItem = this.state.ToDoList
    RemoveItem.splice(index, 1)
    await this.setState({ ToDoList: RemoveItem })
  }

  render() {
    const { ToDoList, List } = this.state
    console.log(this.state)
    return (
      <div className="bg-img">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">ToDo List</span>
          </div>
        </nav>
        <div className="divclass">
          <div className="div-class">
            <div><h5>ToDo List</h5></div>
            <div className='d-flex'>
              <Input
                field="NewTask"
                name="NewTask"
                className="form-control-sm"
                onChange={(e) => this.handleChange(e)}
                placeholder="New Task"
              />

              <button type="button" class="btn btn-primary" onClick={this.CreateList}>Add</button>
            </div>
            {this.state.ToDoList != 0 && <div className="divclass">
              <Table bordered className="tablestyle">
                <thead>
                  <tr>
                    <th>Checkbox</th>
                    <th>List Categories</th>
                    <th>Delete</th>
                  </tr>

                </thead>

                {ToDoList.length != 0 && ToDoList.map((value, index) => (
                  <tbody style={{ textAlign: "center" }}>
                    <tr>
                      <td><span> <input type="checkbox" id="list" name="vehicle1" value={this.state.ToDoList} onClick={(e) => this.RemoveAllData(e, index, value)} /></span> </td>
                      <td><div id={`listvalue${index}`}>{value}</div></td>
                      <td><div onClick={() => this.RemoveData(value, index)}> <i class="fa fa-trash-o" style={{ color: "red" }}></i></div>
                      </td>
                    </tr>
                  </tbody>
                )
                )}
              </Table>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
