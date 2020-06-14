import React, { Component } from 'react'
import Data from './ListaData'
import { observer } from 'mobx-react'

class Lista extends Component {

  sendTask (event) {
    if (event.which === 13) {
      Data.addTask(event.target.value)
      event.target.value = ''
    }
  }

  render () {
    let listDiv = []
    Data.tasks.forEach(
      (value, index) => (
        listDiv.push(
          <li className="list-group-item" onClick={() => Data.deleteTask(index)} key={index}>{value}</li>
        )
      )
    )
    return (
      <div className="container">
        <h2>Lista</h2>
        <input className="row" onKeyPress={this.sendTask.bind(this)}/>
        <div className="row">
          <div className="col-xs-12">
            <ul className="list-group">
              {listDiv}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default observer(Lista)