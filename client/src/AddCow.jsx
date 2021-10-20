import React from 'react'
import axios from 'axios'

class AddCow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      description:''
    }
    this.handleInputChange =  this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  handleSubmit() {
    e.preventDefault()
    axios.post('/api/cows', {
      name: this.state.name,
      description: this.state.description
    })
    then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(`error: ${err}`)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default AddCow;