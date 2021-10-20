
var cowData = [
  {
    name: 'Buttercup',
    description: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'
  },
  {
    name: 'Daisy',
    description: 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.'
  },
  {
    name: 'Milkshake',
    description: 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.'
  },
  {
    name: 'Bessie',
    description: 'a best or closest friend.'
  },
  {
    name: 'MooDonna',
    description: 'archaic : lady -- used as a form of respectful address.'
  },
  {
    name: '	MooLawn',
    description: '	a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.'
  },
]
import React from 'react'
import axios from 'axios'
import AddCow from './AddCow.jsx';
import DisplayCow from './DisplayCow.jsx'


class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: cowData,
      currentCow: ''
    }
    this.handleCowNameClick = this.handleCowNameClick.bind(this);
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
        <h1>Cow List</h1>
        <div>
          <DisplayCow
            cow={this.state.currentCow}/>
        </div>
        <div>
          <AddCow />

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