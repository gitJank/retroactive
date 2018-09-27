import { NavLink, Route, Switch} from "react-router-dom";
import UserPage from "./UserPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import { hot } from "react-hot-loader";
import { colors } from "../styles/theme"

const Brand = styled.span`
    font-size: 60px;
    color: ${colors.rust}
    font-weight: bolder;
    font-family: brandFont;
    padding-right: 3%;
    padding-left: 1.5%;
    margin: 0;
`;

const Navbar = styled.div`
    background-color: ${colors.lightCream};
    padding: 15px;
    padding-top: 20px;
    max-width: 100%;
    text-align: left;
    border-bottom: 5px solid ${colors.rust};
`;

const SwitchContainer = styled.div`
    max-width: 60%;
    margin: auto;
    background-color: ${colors.cyan};
`;

const StyledNavLink = styled(NavLink)`
    color:${colors.rust};
    font-size: 25px;
    font-weight: 500; 
    margin: 0px;
    text-decoration-line: none;
    padding: 16px;  
`;

const activeStyle = { 
    color: colors.cyan,
    borderBottom: '5px solid ',
    borderBottomColor: colors.cyan,  
};

class App extends React.Component {
    render() {
   
        return (
            <div>
            <Navbar>
              <Brand>Retroactive</Brand>
              <StyledNavLink exact to="/" activeStyle={activeStyle}>User</StyledNavLink>
            </Navbar>
            <SwitchContainer>
                <Switch>
                <Route exact path="/" component={UserPage} />
                <Route component={NotFoundPage} />
                </Switch>
            </SwitchContainer>
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);