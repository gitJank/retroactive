import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/theme';

class TabsListPage extends Component {
  constructor() {
    super();

    this.state = {
        tabs: []
    };
  }

  componentDidMount() {
      fetch('http://localhost:3002/api/tabs')
        .then(results => {
            return results.json();
        }).then(data => {
          let tabs = data.map((tab) => {
            return(
              <div key={tab._id}>
                {tab.name}
              </div>
            );
          });
          this.setState({tabs: tabs});
          console.log(this.state.tabs);
        });
  }

  render() {
    return (
    <div>
        {this.state.tabs}
    </div>    
    );
  }
}

export default TabsListPage;