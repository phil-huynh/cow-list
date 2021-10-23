
import React from 'react'
import axios from 'axios'
import AddCow from './AddCow.jsx';
import DisplayCow from './DisplayCow.jsx'


class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      currentCow: ''
    }
    this.handleCowNameClick = this.handleCowNameClick.bind(this);
    this.getCows = this.getCows.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios.get('api/cows')
      .then((res) => {
        this.setState({
          cows: res.data
        })
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  handleCowNameClick(cow) {
    console.log(cow)
    this.setState({
      currentCow: cow
    })
  }

  render() {
    return (
      <div>
        <h1>COW LIST</h1>
        <div>
          <DisplayCow
            cow={this.state.currentCow}/>
        </div>
        <div>
          <AddCow
          getCows = {this.getCows}/>
        </div>
          <ul>
            {this.state.cows.map(cow =>
              <li
                className="cow"
                onClick={() => this.handleCowNameClick(cow)}
                >
                {cow.name}
              </li>
            )}
          </ul>
      </div>
    )
  }
}

export default CowList;