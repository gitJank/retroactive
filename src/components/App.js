import { NavLink, Route, Switch} from "react-router-dom";

import UserPage from "./UserPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import colors from "../styles/colors"
import "./ComponentStyles/app.scss";


class App extends React.Component {
    render() {
        const activeStyle = { 
            color: colors.cyan,
            borderBottom: '5px solid ',
            borderBottomColor: colors.cyan,  
        };
        return (
            <div>
            <div className='navbar'>
              <span className="brand">Retroactive</span>
              <NavLink  className='navLink' exact to="/" activeStyle={activeStyle}>User</NavLink>
            </div>
            <div className="switch">
            <Switch>
              <Route exact path="/" component={UserPage} />
              <Route component={NotFoundPage} />
            </Switch>
            </div>
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);