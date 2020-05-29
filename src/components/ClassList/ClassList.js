import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }  
  }

  componentDidMount() {
    Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({
        students: res.data
      })
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  render() {

    const students = this.state.students.map((element, index)=> {
      return <Link to={`/student/${element.id}`}  key={index}>
        <h3>{element.first_name} {element.last_name}</h3></Link>
    } )

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}