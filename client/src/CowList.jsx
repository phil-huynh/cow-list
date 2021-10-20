
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
  }
]

import AddCow from './AddCow.jsx';

class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: cowData,
      currentCow: null
    }
    this.handleCowNameClick = this.handleCowNameClick.bind(this);
  }

  handleCowNameClick(cow) {
    this.setState({
      currentCow: cow
    })
  }

  render() {
    return (
      <div>
        <h1>Cow List</h1>
        <div>
          {this.state.currentCow != null ? <h3>{this.state.currentCow.name}</h3> : null}
          {this.state.currentCow != null ? <p>{this.state.currentCow.description}</p> : null}
        </div>
        <div>
          <AddCow />

        </div>
          <ul>
            {this.state.cows.map(cow =>
              <li
                className="cow"
                onClick={() => this.handleCowNameClick}
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