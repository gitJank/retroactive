import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/theme';
import Label from '../Atoms/Label';
import Textbox from '../Atoms/Textbox';

const Div = styled.div`
  height: 400px;
  margin-top: 20px;
  padding: 5%;
  border: 3px solid;
  border-radius: 5px;
  border-color: ${colors.lightCream};
  `;

const InfoDiv = styled.div`
    margin: 2%;
    `;

class UserInfo extends Component {
  constructor() {
    super();

    this.state = {
        user: ''
    };
  }

  componentDidMount() {
      fetch('../api/users.json')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({ user: data.users[0]});
        });
  }

  render() {
    return (
        <Div>
            <InfoDiv>
                <Label size="large"> First: {this.state.user.firstName}</Label>
            </InfoDiv>
            <InfoDiv>
                <Label size="large"> Last: {this.state.user.lastName}</Label>
            </InfoDiv>
            <InfoDiv>
                <Label size="large"> Email: {this.state.user.email}</Label>
            </InfoDiv>
            <InfoDiv>
                <Label size="large"> Bio: {this.state.user.bio}</Label>
            </InfoDiv> 
            <Textbox />
        </Div>);
  }
}

export default UserInfo;