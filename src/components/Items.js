import React, { Component } from 'react';

class Items extends Component {
  constructor() {
    super();

    this.state = {
        items: []
    }
  }

  componentDidMount() {
      fetch('http://localhost:3002/api/items')
        .then(results => {
            return results.json();
        }).then(data => {
            let items = data.map((item, index) => {
                return(
                    <div key={index}>
                        {item.name}
                    </div>
                )
            })
            this.setState({ items: items})
        })
  }

  render() {
    return (
        <div>
            items: {this.state.items}
        </div>);
  }
}

export default Items;